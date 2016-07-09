'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async articleTypeAction(){
 	let article_types =[
 	{"name":"系统公告","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
 	{"name":"新闻动态","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
 	{"name":"行业动态","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
 	{"name":"知识荟萃","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"}
 	]
 	
 	let result = await this.model("article_type").addMany(article_types);
 	return this.success(result);
  }
  // async articleAction(){
  // 	for
  // }
}