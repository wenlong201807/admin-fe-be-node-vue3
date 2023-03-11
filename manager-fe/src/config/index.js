/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/ffe674869b1659ff73f75a7c06169e2b/api/',
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
};
export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env],
};