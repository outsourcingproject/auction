import Base from './base';

export default class ArticleType extends Base {
  
  async __before() {
    this.modelInstance = think.model('article_type', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
    return await super.__before();
  }
}