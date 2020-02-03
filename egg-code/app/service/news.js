'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getList() {
    return await this.app.mysql.select('news');
  }
  async getDetail({ title }) {
    console.log(title);
    return await this.app.mysql.select('news', { where: { title } });
  }
}

module.exports = UserController;
