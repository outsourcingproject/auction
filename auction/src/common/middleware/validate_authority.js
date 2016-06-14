export default class ValidateAuthority extends think.middleware.base {
  init(...args) {
    super.init(...args);
    this.userModel = think.model('user', undefined, 'home');
    this.roleModel = think.model('role', undefined, 'home');
  }

  async run() {
    let pathname = this.http.pathname;
    let user = await this.http.session('user');

    let authorities = await this.http.session('authorities');


    if (!authorities || think.isEmpty(authorities)) {
      if (user) {
        //已登录
        authorities = await this.userModel.getUserAuthorities(user.username);

      } else {
        //未登录
        authorities = await this.roleModel.getRoleAuthorities('anonymous');
      }
      await this.http.session('authorities', authorities);
    }

    if (!this._validate(pathname, authorities)) {
      await this.http.fail('NO_AUTHORITY');
      this.http.end();
      return think.prevent();
    }
  }

  //基于URL的权限验证实现主方法
  _validate(pathname, authorities) {
    let validated = false;
    authorities.forEach((i)=> {
      i.paths.forEach((o)=> {

        if (think.isStringExpReg(o)) {
          //string to RegExp
          o=eval(o);
          if (pathname.match(o)) {
            validated = true;
          }
        } else {
          if (o == pathname) {
            validated = true;
          }
        }
      });
    });

    return validated;
  }
}