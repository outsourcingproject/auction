'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    await this.model("item").checkStatus();
    return this.success({result:"result"});
  }

}