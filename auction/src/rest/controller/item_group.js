import Base from './base';

export default class ItemGroup extends Base {

  async __before() {
    this.modelInstance = think.model('item_group', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging=false;
  }
}