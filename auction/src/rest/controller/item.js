import Base from './base';

export default class Item extends Base {

  async __before() {
    this.modelInstance = think.model('item', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'api').get('pageCount.item')
      || await think.model('config', null, 'api').get('pageCount.default');

  }
}