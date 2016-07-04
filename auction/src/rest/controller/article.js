import Base from './base';

export default class Article extends Base {

  async __before() {
    this.modelInstance = think.model('article', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount =
      await think.model('config', null, 'api').get('pageCount.article')
      || await think.model('config', null, 'api').get('pageCount.default');
  }
}