'use strict';

import Base from './base.js';
var URI = require("uri-js");

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    let result = URI.parse("file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98.JPG");
    return this.success(result);
  }
}