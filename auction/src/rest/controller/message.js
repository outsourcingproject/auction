import Base from './base';

export default class Message extends Base {

  async __before() {
    this.modelInstance = think.model('message', null, 'home');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'admin').get('pageCount.message')
      || await think.model('config', null, 'admin').get('pageCount.default');

  }
}