import Base from './base';

export default class ArticleType extends Base {
  
  async __before() {
    this.modelInstance = think.model('article_type', null, 'home');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;
  }
}