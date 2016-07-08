'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

     async indexAction(){

     	// get article on home page
     	let detailNum = 4; //每个类别显示的新闻条数
     	let itemNum = 8;
     	var articleTypeModel = this.model('article_type',true);
     	var articles = [];
     	try{
     		await articleTypeModel.startTrans();
     		let typeList = await articleTypeModel.getList();
     		for(var t in typeList){
     			let a = await articleTypeModel.selectData(typeList[t]["id"],detailNum)
     			articles.push(a[0]);
     		}
     		await articleTypeModel.commit();

     	}catch(e){
     		await articleTypeModel.rollback();
     	}

     	//get item groups on home page

     	let groupModel = this.model('item_group',true);
     	let groups = [];
     	let itemGroup;
     	try{
     		await groupModel.startTrans();
     		itemGroup = await groupModel.getList();
     		for (let i in itemGroup){
     			let g = await  groupModel.selectData(itemGroup[i]["id"],itemNum);
     			groups.push(g[0]);
     		}
     		await groupModel.commit();
     	}catch(e){
     		await groupModel.rollback();
     	}

     	//get services on home page

        let services = await this.model('service').selectData(4);

        let data = {"articles":articles,"groups":groups,"services":services};

        let resultDetails = [];let resultItems =[]; let resultGroups  =[]; let resultServices = [];
        for (let  a of articles){
        	a["article"].map((aa)=>resultDetails.push({"id":aa["id"],"image":aa["image"],"title":aa["title"],"date":aa["date"]}));
        }
        for(let g of groups){
        	g["item"].map((i)=>resultItems.push({"id":i["id"],"name":i["name"], "image":i["image"], "status":i["status"], "price":i["beginPrice"]}));
        	resultGroups.push({"id":g["id"],"image":g["image"],"title":["name"],"content":["desc"],"items":resultItems});
        	resultItems = [];
        }
        services.map((s)=>resultServices.push({"image":s["image"],"title":s["title"],"content":s["content"]}))

     	let result ={
     		"lefttab":{
     			"tabs":articles[0]["name"],
     			"details":resultDetails.slice(0,1*detailNum)
     		},
     		"righttab":{
     			"tabs":[articles[1]["name"],articles[2]["name"],articles[3]["name"]],
     			"details":[resultDetails.slice(1*detailNum,2*detailNum),resultDetails.slice(2*detailNum,3*detailNum),resultDetails.slice(3*detailNum,4*detailNum)] 			
     		},
     		"groups":resultGroups,
     		"service":resultServices

     	}
        if(result!=null)
        	return this.success(result);
        else
        	return this.fail("无相关数据！");
     }
     async itemGroupAction(){
     	let groups = await this.model('item_group').selectData(1,4);//relationFileds,relationLimit,groupNum
        if(groups!=null)
        	return this.success(groups);
        else
        	return this.fail("无相关数据！");

     }
     async serviceAction(){
     	let services = await this.model('service').selectData(4);
     	if(services!=null)
        	return this.success(services);
        else
        	return this.fail("无相关数据！");
     }
     async postAction(){
     	let article_types =[
     	{"name":"系统公告","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
     	{"name":"新闻动态","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
     	{"name":"行业动态","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"},
     	{"name":"知识荟萃","desc":"系统发布的公告",createAt:"123456",updateAt:"123456"}
     	]
     	
     	let result = await this.model("article_type").addMany(article_types);
     	return this.success(result);
     }
}