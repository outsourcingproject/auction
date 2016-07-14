import Base from './base';

export default class Message extends Base {

  async __before() {
    this.modelInstance = think.model('message', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'api').get('pageCount.message')
      || await think.model('config', null, 'api').get('pageCount.default');
  }
}