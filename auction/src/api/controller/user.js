/**
 * Created by zl on 16/2/23.
 */
import Base from './base';
export default class User extends Base {
  userModel;

  init(...args) {
    super.init(...args);
    this.userModel = this.model('user');
  }

  async signupAction() {
    let username = this.param('username');
    let password = this.param('password');
    let email = this.param('email');

    let result = await this.userModel.createUser(username, password, email);

    if (think.isString(result)) {
      return this.fail(result);
    } else {
      // auto login
      return this.success(await this._login(result));

    }

  }

  async loginAction() {
    let username = this.param('username');
    let password = this.param('password');

    let result = await this.userModel.checkUser(username, password);

    if (think.isString(result)) {
      return this.fail(result)
    }
    //login success
    return this.success(await this._login(result));

  }

  async logoutAction() {
    //clear session
    await this.session();
    return this.success();
  }

  async _login(user) {
    await this.session('user', user);
    let authorities = await this.userModel.getUserAuthorities(user.username);
    await this.session('authorities', authorities);

    let obj = {user, authorities};
    //删除敏感信息
    delete obj.user.password;
    return obj;
  }
}