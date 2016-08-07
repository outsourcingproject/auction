import Base from './base';

export default class Bid extends Base {
  
  async __before() {
    this.modelInstance = think.model('bid', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'admin').get('pageCount.bid')
      || await think.model('config', null, 'admin').get('pageCount.default');
    return await super.__before();
  }
}