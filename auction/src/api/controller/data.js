'use strict';

import Base from './base.js';
var uuid = require('uuid');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    // return this.display();
    let images = await this._imageHelper();
    let services = await this._serviceHelper();
    let article_types = await this._articleTypesHelper();
    let authorities = await this._authorityHelper();
    let role_authorities = await this._roleAuthorityHelper();

    let users = await this._userHelper();
    let articles = await this._articleHelper();
    let addresses = await this._addressHelper();
    let messages = await this._messageHelper();
    let item_types = await this._itemTypeHelper();
    let item_groups = await this._itemGroupHelper();
    let items = await this._itemHelper();
    let follows = await this._followHelper();
    let orders = await this._orderHelper();
    let bids = await this._bidHelper();
    return this.success({
      "article_type": article_types,
      "authority": authorities,
      "role_authority": role_authorities,
      "image": images,
      "user":users,
      "article": articles,
      "address": addresses,
      "message": messages,
      "item_type": item_types,
      "item_group": item_groups,
      "item": items,
      "follow": follows,
      "order": orders,
      "bid": bids,
      "service":services
    });
  }

  async _articleTypesHelper(){
    let article_types =[
    {"name":"系统公告","desc":"系统发布的公告","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"name":"新闻动态","desc":"系统发布的公告","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"name":"行业动态","desc":"系统发布的公告","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"name":"知识荟萃","desc":"系统发布的公告","createAt":new Date().getTime(),"updateAt":new Date().getTime()}
    ];
    let result = await this.model("article_type").addMany(article_types); 
    return result;
  }
  async articleTypeAction(){ 	
   	let result = await _articleTypesHelper;
   	return this.success(result);
  }

  async _userHelper(){
    let users = [];
    for(let i=0;i<10;i++)
      users.push({"username":"zhangle"+i,
        "password":"zlpwd"+i,
        "email":i+"573328344@qq.com",
        "emailValidate":1,
        "desc":"I'm zhangle",
        "avatar":1,
        "creditLines":i,
        "level":i+1,
        "role":1,
        "lastLogin":new Date().getTime(),
        "createAt":new Date().getTime(),
        "updateAt":new Date().getTime()
      });
    let result = await this.model("user").addMany(users);
    return result;
  }
  async userAction(){
    
    let result = await _userHelper();
    return this.success(result);
  }

  async _addressHelper(){
    let addresses=[];
    for (let i = 1; i<=20; i++){
      addresses.push({
        "user":Math.ceil(i/2),
        "isDefault": i%2,
        "content":"这是第"+i+"条地址",
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("address").addMany(addresses);
    return result;
  }

  async addressAction(){
    let result = await this._addressHelper();
    return this.success(result);
  }
  async _articleHelper(){
    let articles =[];
    for (let i =1; i<=28; i++){
      articles.push({
        "title":"这是第"+i+"篇文章的题目",
        "image":i%10+1,
        "content":"这是第"+i+"篇文章的内容，写的真精彩",
        "author":Math.ceil(i/5),
        "type":i%4+1,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = this.model("article").addMany(articles);
    return result;
  }
  async articleAction(){
  	let result = await this._articleHelper();
    return this.success(result);
  }

  async _authorityHelper(){
    let authorities = [
    {"name":"浏览拍品","desc":"描述浏览拍品","allows":"允许浏览拍品","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"name":"参与竞标","desc":"描述参与竞标","allows":"允许参与竞标","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"name":"送货上门","desc":"描述送货上门","allows":"允许送货上门","createAt":new Date().getTime(),"updateAt":new Date().getTime()}
    ];
    let result = await this.model("authority").addMany(authorities);
    return result;
  }

  async authorityAction(){
    let result = await this._authorityHelper();
    return this.success(result);
  }

  async _itemGroupHelper(){
    let groups =[];
    for (let i = 0; i<8; i++){
      groups.push({
        "name":"专场"+i,
        "image":"["+i+"]",
        "desc":"这是第"+"i"+"个专场",
        "isOpen":i%2,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("item_group").addMany(groups);
    return result;
  }

  async itemGroupAction(){
    let result = await this._itemGroupHelper();
    return result;
  }

  async _itemTypeHelper(){
    let types = [];
    for (let i=0; i<5; i++){
      types.push({
        "name":"古玩类型"+i,
        "desc":"这是古玩类型"+i
      })
    }
    let result = await this.model("item_type").addMany(types);
    return result;
  }

  async itemTypeAction(){
    let result = await this._itemTypeHelper();
    return this.success(result);
  }

  async _messageHelper(){
    let messages = [];
    for (let i =1; i<10; i++){
      messages.push({
        "from": i,
        "to": i+1,
        "title":"这是user"+i+"发给user"+(i+1)+"的消息",
        "content":"Hello, user"+i+", I'm user "+(i+1),
        "read": i%2,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("message").addMany(messages);
    return result;
  }

  async messageAction(){
    let result = await this._messageHelper();
    return result;
  }

  async _roleAuthorityHelper(){
    let ras =[];
    for(let i = 0; i<10; i++){
      ras.push({
        "role": i%2+1,
        "authority": i%3+1,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("role_authority").addMany(ras);
    return result;
  }

  async roleAuthorityAction(){
    let result = await this._roleAuthorityHelper;
    return this.success(result);
  }

  async _orderHelper(){
    let orders =[];
    for(let i = 0; i<10; i++){
      orders.push({
        "user": i+1,
        "item": i+1,
        "address": i+1,
        "status": i%5,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("order").addMany(orders);
    return result;
  }
  async orderAction(){
    let result = await this._orderHelper();
    return this.success(result);
  }
  async _itemHelper(){
    let items =[];
    for(let i=1; i<=20; i++){
      items.push({
        "name":"item"+i,
        "foundTime":(new Date()).toString(),
        "foundLocation":"河北省邯郸市" ,
        "desc":"赵国国宝",
        "image":"["+i+"]",
        "status": i%4,
        "publisher": i%10+1,
        "currentBidder": i%10+1,
        "group": i%8+1,
        "beginPrice": 50,
        "stage": 50,
        "currentPrice": 50*i,
        "auctionType": i%2,
        "auctionBeginTime": new Date().getTime(),
        "auctionEndTime": new Date().getTime(),
        "watchCount":100*i,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime(),
        "type": i%4 + 1
      })
    }

    let result = await this.model("item").addMany(items);
    return result;

  }
  async itemAction(){
    let result = await this._itemHelper();
    return this.success(result);
  }
  async _bidHelper(){
    let bids =[];
    for(let i =1; i<=30; i++){
      bids.push({
        "item": i%10+1,
        "user": i%10+1,
        "value":(i+1)*50,
        "status": i%4,
        "createAt": new Date().getTime(),
        "updateAt": new Date().getTime()
      })
    }
    let result = await this.model("bid").addMany(bids);
    return result;
  }
  async bidAction(){
    let result = await this._bidHelper();
    return this.success(result);
  }

  async _imageHelper(){
    let images = [];
    for(let i = 1 ; i<=20; i++){
      images.push({
        "uuid": uuid.v1(),
        "originName": "image"+i,
        "path":"www/pictures/image"+i
      })
    }
    let result = await this.model("image").addMany(images);
    return result;
  }
  async imageAction(){
    let result = await this._imageHelper();
    return this.success(result);
  }
  async _followHelper(){
    let follows =[];
    for (let i = 0; i<20; i++){
      follows.push({
        "user": i%10 + 1,
        "item": i+1
      })
    }
    let result = await this.model("follow").addMany(follows);
    return result;
  }
  async followAction(){
    let result = await this._followHelper();
    return this.success(result);
  }

  async _serviceHelper(){
    let services = [
    {"title":"如实描述", "image":1, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"title":"快速上拍", "image":2, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"title":"24小时发货", "image":3, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给","createAt":new Date().getTime(),"updateAt":new Date().getTime()},
    {"title":"诚信服务", "image":4, "content":"是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给","createAt":new Date().getTime(),"updateAt":new Date().getTime()}
    ];
    let result = await this.model("service").addMany(services);
    return result;
  }
  async serviceAction(){
    let result = await this._serviceHelper();
    return result;
  }
}