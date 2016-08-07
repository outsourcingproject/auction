'use strict';

export default class Base extends think.controller.rest {
  modelInstance;
  modelPk;

  needPaging;
  pageCount;
  listOrder;

  init(...args) {
    super.init(...args);
    this.modelInstance = null;
    this.modelPk = null;
    this.needPaging = 1;
    this.pageCount = think.config('site.defaultPageCount');
    this.listOrder = {'createAt': -1}
  }

  //允许跨域访问
  __before() {
    let method = this.http.method.toLowerCase();
    this._setCorsHeader();
    if (method === "options") {
      return this.end();
    }

  }

  _setCorsHeader() {
    this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
    this.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
    this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
    this.header("Access-Control-Allow-Credentials", "true");
  }

  async getAction() {
    let data;
    if (this.id) {
      data = await this.modelInstance
        .where({[this.modelPk]: this.id})
        .find();
    } else {
      let filter = this.param('filter');
      let listOrder = this.param('listOrder');
      let needPaging = +(this.param('needPaging') || this.needPaging);
      let pageNo = +this.param('pageNo') > 0 ? +this.param('pageNo') : 1;
      let pageCount = +(this.param('pageCount') || this.pageCount);

      if (listOrder && !think.isEmpty(JSON.parse(listOrder))) {
        listOrder = JSON.parse(listOrder);
      } else {
        listOrder = this.listOrder;
      }

      if (filter && !think.isEmpty(JSON.parse(filter))) {
        filter = JSON.parse(filter);
      } else {
        filter = {};
      }

      if (needPaging) {
        data = await this.modelInstance
          .where(filter)
          .order(listOrder)
          .page(pageNo, pageCount)
          .select();
      } else {
        data = await this.modelInstance.where(filter).order(listOrder).select();
      }
    }
    return this.success(data);

  }

  async postAction() {

    let data = this.post();
    delete data[this.modelPk];
    if (think.isEmpty(data)) {
      return this.fail("data is empty");
    }
    let insertId = await this.modelInstance.add(data);
    return this.success({id: insertId});
  }

  async deleteAction() {

    if (!this.id) {
      return this.fail("params error");
    }
    console.log(this.modelPk, ' delete');
    let rows = await this.modelInstance.where({[this.modelPk]: this.id}).delete();
    return this.success({affectedRows: rows});
  }

  async putAction() {

    if (!this.id) {
      return this.fail("params error");
    }
    let data = this.post();
    delete data[this.modelPk];
    if (think.isEmpty(data)) {
      return this.fail("data is empty");
    }
    let rows = await this.modelInstance.where({[this.modelPk]: this.id}).update(data);
    return this.success({affectedRows: rows});
  }

  /**
   * @param obj the base object
   * @param arr array of Object which desc popular key and collection name. for example:{key:'author',ref:'users'}
   *
   */
  async populate(obj, arr) {
    let model;
    let key;
    for (let i of arr) {
      model = this.model(i.ref);
      key = i.key;
      if (think.isArray(obj[key])) {
        for (let j of obj[key]) {
          obj[key].push(await model.where({'_id': j + ''}).find());
          obj[key].shift();
        }
      } else {
        obj[key] = await model.where({'_id': obj[key] + ''}).find();
      }

    }
    return obj;
  }

  async helper() {

  }
}