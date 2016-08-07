'use strict';

export default class Base extends think.controller.base {
  /**
   * some base method in here
   */
  init(...args) {
    super.init(...args);
  }

  async __before() {
    console.log('in before');
    let method = this.http.method.toLowerCase();
    this._setCorsHeader();
    if (method === "options") {
      return this.end();
    }
  }

  _setCorsHeader() {
    this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
    this.header("Access-Control-Allow-Headers", "x-requested-with");
    this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
    this.header("Access-Control-Allow-Credentials", "true");
  }
}