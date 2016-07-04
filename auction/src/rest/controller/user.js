import Base from './base.js';

export default class User extends Base {

  async __before() {
    this.modelInstance = think.model('user', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'admin').get('pageCount.user')
      || await think.model('config', null, 'admin').get('pageCount.default');

  }
}