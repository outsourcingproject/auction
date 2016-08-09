'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

     async indexAction(){

        let detailNum = 6; //文章数量
     	// get article on home page
     	let articles = await this.model('article_type').getArticle();

     	//get item groups on home page
     	let groups = await this.model('item_group').getGroupItem();

     	//get services on home page
        let services = await this.model('service').selectData(4);

        //format data
        for (let  a of articles){
        	a["article"].map((aa)=>{aa["date"] = aa["createAt"],delete aa["createAt"]});
        }
        for(let g of groups){
        	g["item"].map((i)=>{i["price"]=i["currentPrice"],delete i["currentPrice"]});
            g["title"] = g["name"]; delete g["name"];
            g["auctions"] = g["item"]; delete g["item"];
        }
     	let result ={
     		"lefttab":{
     			"tabs":[articles[0]["name"]],
     			"details":[articles[0]["article"].slice(0,6)]
     		},
     		"righttab":{
     			"tabs":[articles[1]["name"],articles[2]["name"],articles[3]["name"]],
     			"details":[articles[1]["article"].slice(0,6), 
                    articles[2]["article"].slice(0,6), 
                    articles[3]["article"].slice(0,6)] 			
     		},
     		"auctionGroups":groups,
     		"service":services
     	}
        if(result!=null)
        	return this.success(result);
        else
        	return this.fail("无相关数据！");
     }
}