const router = require('koa-router')();
const util = require('../utils/util');
const Menu = require('../models/menuSchema');

router.prefix('/menu');

// 菜单列表查询
router.get('/list', async (ctx) => {
  const { menuName, menuState } = ctx.request.query;
  const params = {};
  if (menuName) params.menuName = menuName;
  if (menuState) params.menuState = menuState;

  let rootList = (await Menu.find(params)) || [];

  // 查询制定菜单时
  if (menuName) {
    ctx.body = util.success(rootList);
    return;
  }

  // 查询全部菜单时
  const permissionList = util.getTreeMenu(rootList, null, []);
  ctx.body = util.success(permissionList);
});

// 菜单编辑、删除、新增功能
router.post('/operate', async (ctx) => {
  // 入参没有校验
  const { _id, action, ...params } = ctx.request.body;
  let res, info;
  try {
    if (action == 'add') {
      res = await Menu.create(params);
      info = '创建成功';
    } else if (action == 'edit') {
      params.updateTime = new Date(); // 字段需要更新
      res = await Menu.findByIdAndUpdate(_id, params);
      info = '编辑成功';
    } else {
      res = await Menu.findByIdAndRemove(_id);
      // 删除完父级菜单，那么其所有子集菜单都需要删除
      await Menu.deleteMany({ parentId: { $all: [_id] } });
      info = '删除成功';
    }
    ctx.body = util.success('', info);
  } catch (error) {
    // 失败了，没有将对应的接口错误返回
    ctx.body = util.fail(error.stack);
  }
});

module.exports = router;
