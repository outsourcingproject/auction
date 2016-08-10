'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

   //获取文章详情页侧栏数据
   async tabAction(){
	    let articles = await this.model('article_type').getArticle();
	    for (let  a of articles){
	    	a["article"].map((aa)=>{aa["date"] = aa["createAt"],delete aa["createAt"]});
	    }
	    let result = {
     		"lefttab":{
     			"tabs":[articles[0]["name"]],
     			"details":[articles[0]["article"]]
     		},
     		"righttab":{
     			"tabs":[articles[1]["name"],articles[2]["name"],articles[3]["name"]],
     			"details":[articles[1]["article"], 
                    articles[2]["article"], 
                    articles[3]["article"]] 			
     		}
	    };
	    return this.success(result);
   }
}
