/**
 * 休假申请模块
 */
const router = require('koa-router')();
const Leave = require('../models/leaveSchema');
const Dept = require('../models/deptSchema');
const util = require('../utils/util');
const { saveFile } = require('../utils/saveFile');

router.prefix('/leave');

// 上传文件
router.post('/upload', async (ctx) => {
  // console.log('文件参数获取:', ctx.request.files.file);

  const { mimetype, filepath, size, originalFilename, newFilename } =
    ctx.request.files.file;

  console.log(
    '--接口前端文件参数:',
    mimetype,
    filepath,
    size,
    originalFilename,
    newFilename
  );

  if (!originalFilename) {
    return;
  }
  const fileR = await saveFile({
    name: originalFilename,
    newName: newFilename,
    type: mimetype,
    size,
    filePath: filepath,
  });
  ctx.body = util.success(fileR);
});

// 查询申请列表
router.get('/list', async (ctx) => {
  const { applyState, type } = ctx.request.query;
  const { page, skipIndex } = util.pager(ctx.request.query);
  let authorization = ctx.request.headers.authorization;
  let { data } = util.decoded(authorization);
  try {
    let params = {};
    if (type == 'approve') {
      // 待审核 或者
      if (applyState == 1 || applyState == 2) {
        params.curAuditUserName = data.userName;
        // 审批流 不同阶段的状态
        params.$or = [{ applyState: 1 }, { applyState: 2 }];
      } else if (applyState > 2) {
        // 子文档查询（最复杂）
        params = { 'auditFlows.userId': data.userId, applyState };
      } else {
        params = { 'auditFlows.userId': data.userId };
      }
    } else {
      params = {
        'applyUser.userId': data.userId,
      };
      // 审批流中状态值 可能有多种情况
      if (applyState) params.applyState = applyState;
    }
    const query = Leave.find(params);
    const list = await query.skip(skipIndex).limit(page.pageSize);
    const total = await Leave.countDocuments(params);
    ctx.body = util.success({
      page: {
        ...page,
        total,
      },
      list,
    });
  } catch (error) {
    ctx.body = util.fail(`查询失败:${error.stack}`);
  }
});

router.get('/count', async (ctx) => {
  let authorization = ctx.request.headers.authorization;
  let { data } = util.decoded(authorization);
  try {
    let params = {};
    params.curAuditUserName = data.userName;
    params.$or = [{ applyState: 1 }, { applyState: 2 }];
    const total = await Leave.countDocuments(params);
    ctx.body = util.success(total);
  } catch (error) {
    ctx.body = util.fail(`查询异常：${error.message}`);
  }
});

router.post('/operate', async (ctx) => {
  const { _id, action, ...params } = ctx.request.body;
  let authorization = ctx.request.headers.authorization;
  let { data } = util.decoded(authorization);

  if (action == 'create') {
    // 生成申请单号
    let orderNo = 'XJ';
    orderNo += util.formateDate(new Date(), 'yyyyMMdd');
    const total = await Leave.countDocuments();
    params.orderNo = orderNo + total;

    // TODO 此关系表需要捋顺

    // 获取用户当前部门ID
    let id = data.deptId.pop();
    // 查找负责人信息
    let dept = await Dept.findById(id);
    // 获取人事部门和财务部门负责人信息
    let userList = await Dept.find({
      deptName: { $in: ['人事部门', '财务部门'] },
    });

    let auditUsers = dept.userName;
    let auditFlows = [
      {
        userId: dept.userId,
        userName: dept.userName,
        userEmail: dept.userEmail,
      },
    ];
    userList.map((item) => {
      auditFlows.push({
        userId: item.userId,
        userName: item.userName,
        userEmail: item.userEmail,
      });
      auditUsers += ',' + item.userName;
    });

    params.auditUsers = auditUsers;
    params.curAuditUserName = dept.userName;
    params.auditFlows = auditFlows;
    params.auditLogs = [];
    params.applyUser = {
      userId: data.userId,
      userName: data.userName,
      userEmail: data.userEmail,
    };

    let res = await Leave.create(params);
    ctx.body = util.success('', '创建成功');
  } else {
    let res = await Leave.findByIdAndUpdate(_id, { applyState: 5 });
    ctx.body = util.success('', '操作成功');
  }
});

router.post('/approve', async (ctx) => {
  const { action, remark, _id } = ctx.request.body;
  let authorization = ctx.request.headers.authorization;
  let { data } = util.decoded(authorization);
  let params = {};
  try {
    // 1:待审批 2:审批中 3:审批拒绝 4:审批通过 5:作废
    let doc = await Leave.findById(_id);
    let auditLogs = doc.auditLogs || [];
    if (action == 'refuse') {
      params.applyState = 3;
    } else {
      // 审核通过
      // 如果审批中的日志记录长度等于审批流要求的长度，则判断为审批通过
      if (doc.auditFlows.length == doc.auditLogs.length) {
        ctx.body = util.success('当前申请单已处理，请勿重复提交');
        return;
      } else if (doc.auditFlows.length == doc.auditLogs.length + 1) {
        // 审批流中最后一环的审批
        params.applyState = 4;
      } else if (doc.auditFlows.length > doc.auditLogs.length) {
        params.applyState = 2;
        params.curAuditUserName =
          doc.auditFlows[doc.auditLogs.length + 1].userName;
      }
    }
    auditLogs.push({
      userId: data.userId,
      userName: data.userName,
      createTime: new Date(),
      remark,
      action: action == 'refuse' ? '审核拒绝' : '审核通过',
    });
    params.auditLogs = auditLogs;
    // 更新到库里头
    let res = await Leave.findByIdAndUpdate(_id, params);
    ctx.body = util.success('', '处理成功');
  } catch (error) {
    ctx.body = util.fail(`查询异常：${error.message}`);
  }
});

module.exports = router;
