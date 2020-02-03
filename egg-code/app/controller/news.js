'use strict';

const Controller = require('egg').Controller;
const sendRes = require('../utils');

class NewsController extends Controller {
  async getList() {
    const { ctx } = this;
    const result = await ctx.service.news.getList();
    const data = [];
    result.forEach(item => {
      if (data.some(it => item.title === it.title)) return;
      data.push(item);
    });
    ctx.body = sendRes(1, '成功', data);
  }
  async getDetail() {
    const { ctx } = this;
    const data = await ctx.service.news.getDetail(ctx.request.body);
    ctx.body = sendRes(1, '获取成功', data);
  }
}

module.exports = NewsController;
