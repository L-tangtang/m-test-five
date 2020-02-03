'use strict';

const url = require('url');
const jwt = require('jsonwebtoken');
const sendRes = require('../utils');

function verifyFunc(token, keys) {
  return new Promise(res => {
    jwt.verify(token, keys, (error, result) => {
      if (error) throw error;
      return res(result);
    });
  });
}
module.exports = options => {
  return async (ctx, next) => {
    // 判断前端请求路径 如果在白名单里 就不受限
    if (options.includes(url.parse(ctx.url).pathname)) {
      await next();
      return;
    }
    // 获取token
    const token = ctx.get('authorToken');
    // 如果没有token
    if (!token) {
      ctx.body = sendRes(0, '无访问权限，请登录');
      return;
    }
    // 有token
    let info;
    try {
      // 去解密
      info = await verifyFunc(token, ctx.app.config.keys);
    } catch (error) {
      // 解密失败
      ctx.body = sendRes(0, '权限无效，重新登陆');
      return;
    }
    // 把解密出来的用户信息 挂载到全局上
    ctx.info = info;
    await next();
  };
};
