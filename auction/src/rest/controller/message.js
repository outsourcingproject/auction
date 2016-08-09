import Base from './base';

export default class Message extends Base {

  async __before() {
    this.modelInstance = think.model('message', null, 'api');
    this.modelPk = await this.modelInstance.getPk();
    this.pageCount = false;

    let user = await this.session('user');

    if (!think.isEmpty(user)) {
      this.filter = {to: user.id};
    }


    return await super.__before();
  }
}