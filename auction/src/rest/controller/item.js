import Base from './base';

export default class Item extends Base {

  async __before() {
    this.modelInstance = think.model('item', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
    this.listOrder = {'createAt': 'desc'};
    return await super.__before();
  }

  async postAction() {

    let data = this.post();
    delete data[this.modelPk];
    if (think.isEmpty(data)) {
      return this.fail("data is empty");
    }
    let user = await this.session('user');
    if (!think.isEmpty(user)) {
      data.user = user.id;
      data.author = user.id;
      data.publisher = user.id;
    }

    let insertId = await this.modelInstance.add(data);

    await this.modelInstance.checkStatus();

    let now = +new Date();
    let item = this.param();

    if (item.auctionBeginTime - now > 0)
      this.modelInstance.setCheckStatusTimer(item.auctionBeginTime - now);
    if (item.auctionEndTime - now > 0)
      this.modelInstance.setCheckStatusTimer(item.auctionEndTime - now);

    return this.success({id: insertId});
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

    await this.modelInstance.checkStatus();

    let now = +new Date();
    let item = this.param();

    if (item.auctionBeginTime - now > 0)
      this.modelInstance.setCheckStatusTimer(item.auctionBeginTime - now);
    if (item.auctionEndTime - now > 0)
      this.modelInstance.setCheckStatusTimer(item.auctionEndTime - now);

    return this.success({affectedRows: rows});
  }
}