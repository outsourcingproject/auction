import Base from './base';

export default class Item extends Base {

  async __before() {
    this.modelInstance = think.model('item', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
    this.listOrder = {'createAt': 'desc'};
    return await super.__before();
  }
}