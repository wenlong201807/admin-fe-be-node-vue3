/**
 * 用户管理模块
 */
const router = require('koa-router')();
const User = require('./../models/userSchema');
const Counter = require('./../models/counterSchema');
const Menu = require('./../models/menuSchema');
const Role = require('./../models/roleSchema');
const util = require('./../utils/util');
const constance = require('./../utils/constance');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
router.prefix('/users');

// 用户登录
router.post('/login', async (ctx) => {
  try {
    const { userName, userPwd } = ctx.request.body; // post 参数获取方式
    console.log('userName, userPwd----', userName, userPwd)
    /**
     * 返回数据库指定字段，有三种方式
     * 1. 'userId userName userEmail state role deptId roleList'
     * 2. {userId:1,_id:0} // 1代表返回，0代表不返回
     * 3. .select('userId')
     */
    // console.log('md5(userPwd) super_admin:', md5('123456!@#$%^&*qaz'));
    // console.log('md5(userPwd) other:', md5('123456'))
    const res = await User.findOne(
      {
        userName,
        userPwd: md5(userPwd),
        // 过滤需要返回给接口的字段，不用将数据库全量字段返回
      },
      'userId userName userEmail state role deptId roleList'
    );
    console.log('----', res)

    if (res) {
      const data = res._doc; // 这些是数据库返回的 ._doc 信息，也是前端需要的数据信息
      // 登陆成功后生成token
      const token = jwt.sign(
        {
          data,
        },
        constance.SECRET_SALT,
        { expiresIn: '1h' }
      ); // 密钥，过期时间
      data.token = token;
      ctx.body = util.success(data);
    } else {
      ctx.body = util.fail('账号或密码不正确');
    }
  } catch (error) {
    ctx.body = util.fail(error.msg);
  }
});

// 用户列表
router.get('/list', async (ctx) => {
  const { userId, userName, state } = ctx.request.query;
  const { page, skipIndex } = util.pager(ctx.request.query);
  let params = {};
  // if (userId) params.userId = userId;
  if (userName) params.userName = userName;
  if (state && state != '0') params.state = state;
  try {
    // 根据条件查询所有用户列表
    const query = User.find(
      { ...params, remark: { $ne: '手动添加的' } },
      { _id: 0, userPwd: 0 }
    ); // 排除掉的字段 { _id: 0, userPwd: 0 }
    const list = await query.skip(skipIndex).limit(page.pageSize);
    const total = await User.countDocuments(params);

    ctx.body = util.success({
      page: {
        ...page,
        total,
      },
      list,
    });
  } catch (error) {
    ctx.body = util.fail(`查询异常:${error.stack}`);
  }
});

// 获取全量用户列表
router.get('/all/list', async (ctx) => {
  try {
    // 过滤掉 状态值 为 4 (已删除)
    const list = await User.find(
      { state: { $ne: 4 } },
      'userId userName userEmail'
    );
    ctx.body = util.success(list);
  } catch (error) {
    ctx.body = util.fail(error.stack);
  }
});

// 用户删除/批量删除
// 软删除操作，删除的数据做一个标记而已，数据不是真的删除
router.post('/delete', async (ctx) => {
  // 待删除的用户Id数组
  const { userIds } = ctx.request.body;
  // User.updateMany({ $or: [{ userId: 10001 }, { userId: 10002 }] })
  const res = await User.updateMany({ userId: { $in: userIds } }, { state: 4 }); // 被删除的数据标记为状态4 state: 4
  if (res.nModified) {
    ctx.body = util.success(res, `共删除成功${res.nModified}条`);
    return;
  }
  ctx.body = util.fail('删除失败');
});
// 用户新增/编辑
router.post('/operate', async (ctx) => {
  const {
    userId,
    userName,
    userEmail,
    mobile,
    job,
    state,
    roleList,
    deptId,
    action,
  } = ctx.request.body;
  if (action == 'add') {
    if (!userName || !userEmail || !deptId) {
      ctx.body = util.fail('参数错误', util.CODE.PARAM_ERROR);
      return;
    }
    const res = await User.findOne(
      { $or: [{ userName }, { userEmail }] },
      '_id userName userEmail'
    );
    if (res) {
      ctx.body = util.fail(
        `系统监测到有重复的用户，信息如下：${res.userName} - ${res.userEmail}`
      );
    } else {
      // 新增用户时，查看提示信息
      // TODO 用户查重
      const doc = await Counter.findOneAndUpdate(
        { _id: 'userId' },
        // { $inc: { sequence_value: 1 } },
        { new: true }
      );
      const total = await User.countDocuments({});
      try {
        const user = new User({
          userId: total + 1 + '',
          // userId: doc._id,
          // userId: doc.sequence_value, // TODO
          userName,
          userPwd: md5('123456'),
          userEmail,
          role: 1, //默认普通用户
          roleList,
          job,
          state,
          deptId,
          mobile,
        });
        user.save();
        ctx.body = util.success('', '用户创建成功');
      } catch (error) {
        ctx.body = util.fail(error.stack, '用户创建失败');
      }
    }
  } else {
    if (!deptId) {
      ctx.body = util.fail('部门不能为空', util.CODE.PARAM_ERROR);
      return;
    }
    try {
      const res = await User.findOneAndUpdate(
        { userId },
        { mobile, job, state, roleList, deptId }
      );
      ctx.body = util.success({}, '更新成功');
    } catch (error) {
      ctx.body = util.fail(error.stack, '更新失败');
    }
  }
});

// Home.vue 左侧权限菜单
// 获取用户对应的权限菜单
router.get('/getPermissionList', async (ctx) => {
  let authorization = ctx.request.headers.authorization;
  let { data } = util.decoded(authorization);

  let menuList = await getMenuList(data.role, data.roleList);
  let actionList = getAction(JSON.parse(JSON.stringify(menuList)));
  ctx.body = util.success({ menuList, actionList });
});

async function getMenuList(userRole, roleKeys) {
  let rootList = [];
  if (userRole == 0) {
    // 管理员时，查询所有
    rootList = (await Menu.find({})) || [];
  } else {
    // 根据用户拥有的角色，获取权限列表
    // 现查找用户对应的角色有哪些
    let roleList = await Role.find({ _id: { $in: roleKeys } });
    let permissionList = [];
    roleList.map((role) => {
      let { checkedKeys, halfCheckedKeys } = role.permissionList;
      permissionList = permissionList.concat([
        ...checkedKeys,
        ...halfCheckedKeys,
      ]);
    });
    // 权限去重
    permissionList = [...new Set(permissionList)];
    rootList = await Menu.find({ _id: { $in: permissionList } });
  }
  // 非管理员，只能看到 授权菜单和授权按钮权限
  return util.getTreeMenu(rootList, null, []);
}

// 按钮权限获取
function getAction(list) {
  let actionList = [];
  const deep = (arr) => {
    while (arr.length) {
      let item = arr.pop();
      if (item.action) {
        item.action.map((action) => {
          actionList.push(action.menuCode);
        });
      }
      if (item.children && !item.action) {
        deep(item.children);
      }
    }
  };
  deep(list);

  return actionList;
}

module.exports = router;

/*
* 代表 乘法
/ 代表 除法
(8 - 6) * (7 + 5) = 24
8 * (6 / (7 - 5)) = 24
6 * (8 / (7 - 5)) = 24
6 * (7 + 5 - 8) = 24
6 * 8 / (7 - 5) = 24

自己找规律
2 * 12 = 24
8 * 3 = 24
6 * 4 = 24
48 / 2 = 24
*/
