const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const log4js = require('./utils/log4j');
const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');
const util = require('./utils/util');
const constance = require('./utils/constance');
const users = require('./routes/users');
const menus = require('./routes/menus');
const roles = require('./routes/roles');
const depts = require('./routes/depts');
const leave = require('./routes/leave');

console.log('process.env后端环境变量:', process.env.NODE_ENV);
// error handler
onerror(app);

// 连接数据库
require('./config/db');

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());

// 静态资源存放
app.use(require('koa-static')(__dirname + '/public'));

// 多页面实用方式，服务端渲染
app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  })
);

// logger
app.use(async (ctx, next) => {
  // 未生效
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');

  log4js.info(`参数: get params:${JSON.stringify(ctx.request.query, null, 2)}`);
  log4js.info(`参数: post params:${JSON.stringify(ctx.request.body, null, 2)}`);
  await next().catch((err) => {
    if (err.status == '401') {
      ctx.status = 200; // 重置状态码
      ctx.body = util.fail('Token认证失败', util.CODE.AUTH_ERROR);
    } else {
      throw err;
    }
  });
});

// 心跳检测
router.get('/heart', (ctx) => {
  console.log('心跳检测', 77);
  ctx.body = '有心跳的';
});

// 校验中间件 权限拦截
app.use(
  koajwt({ secret: constance.SECRET_SALT }).unless({
    path: [/^\/api\/users\/login/], // 过滤不用校验的接口
  })
);

// 全局的一级路由
router.prefix('/api');

router.use(users.routes(), users.allowedMethods());
router.use(menus.routes(), menus.allowedMethods());
router.use(roles.routes(), roles.allowedMethods());
router.use(depts.routes(), depts.allowedMethods());
router.use(leave.routes(), leave.allowedMethods());
app.use(router.routes(), router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  log4js.error(`${err.stack}`);
});

module.exports = app;
