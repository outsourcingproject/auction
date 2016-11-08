import Base from './base';

export default class Address extends Base {



  async __before() {
    this.modelInstance = think.model('address', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.needPaging = false;

    let user = await this.session('user');

    if (!this.param('filter')&& !think.isEmpty(user)) {
      this.filter = {user: user.id};
    }
    return await super.__before();
  }
}