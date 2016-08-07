import Base from './base.js';

export default class User extends Base {

  async __before() {
    this.modelInstance = think.model('user', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'api').get('pageCount.user')
      || await think.model('config', null, 'api').get('pageCount.default');
    return await super.__before();
  }
}