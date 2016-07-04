/**
 * Created by zl on 16/2/23.
 */
export default class User extends think.logic.base {
  signupAction() {
    //this.allowMethods = 'post';
    this.rules = {
      username: {
        required: true,
        regexp: /^[a-zA-Z_]\w{5,19}$/
      },
      password: {
        required: true,
        regexp: /^\w{6,20}$/
      },
      email: {
        required: true,
        email: true
      }
    }
  }

  loginAction() {
    //this.allowMethods = 'post';
    this.rules = {
      username: {
        required: true,
        regexp: /^[a-zA-Z_]\w{5,19}$/
      },
      password: {
        required: true,
        regexp: /^\w{6,20}$/
      }
    }
  }

  logoutAction() {
    this.allowMethods = 'get';
  }
}