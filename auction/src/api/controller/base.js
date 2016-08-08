'use strict';

export default class Base extends think.controller.base {
  /**
   * some base method in here
   */
  init(...args) {
    super.init(...args);
  }

  async __before() {
    let method = this.http.method.toLowerCase();
    this._setCorsHeader();
    if (method === "options") {
      return this.end();
    }
  }

  _setCorsHeader() {
    this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
    this.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, Set-Cookie,*");
    this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
    this.header("Access-Control-Allow-Credentials", "true");
  }
}