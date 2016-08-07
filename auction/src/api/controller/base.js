'use strict';

export default class Base extends think.controller.base {
  /**
   * some base method in here
   */
  init(...args) {
    super.init(...args);
  }

  __before() {
    let method = this.http.method.toLowerCase();
    if (method === "options") {
      this.setCorsHeader();
      this.end();
      return;
    }
    this.setCorsHeader();
  }

  setCorsHeader() {
    this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
    this.header("Access-Control-Allow-Headers", "x-requested-with");
    this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
    this.header("Access-Control-Allow-Credentials", "true");
  }
}