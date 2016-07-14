import Base from './base';

export default class Order extends Base {

  async __before() {
    this.modelInstance = think.model('order', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'api').get('pageCount.order')
      || await think.model('config', null, 'api').get('pageCount.default');
  }

}