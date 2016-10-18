'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(...args) {
    super.init(...args);
    this.itemModel = this.model('item');
  }

  async auctioningAction() {
    let itemModel = this.model("item");
    let items = await this.model("item")
      .setRelation(false)
      .join("item_group on item.group = item_group.id")
      .join("item_type on item.type = item_type.id")
      .where({status: itemModel.AUCTIONING})
      .where("item_group.isOpen = 1")
      .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type")
      .select();
    let user = await this.session("user");
    if (!think.isEmpty(user)) {
      let followingItems = await this.model("follow").field("item").where({user: user["id"]}).select();
      let itemIds = followingItems.map((f)=>f["item"]);
      items.map((i)=> {
        return (itemIds.indexOf(i["id"]) !== -1) ? i["following"] = true : i["following"] = false
      });
    } else {
      items.map((i)=> {
        return i["following"] = null
      });
    }
    return this.success(items);
  }

  async auctionedAction() {
    let itemModel = this.model("item");
    let items = await this.model("item")
      .setRelation(false)
      .join("item_group on item.group = item_group.id")
      .join("item_type on item.type = item_type.id")
      .where({status: [itemModel.AUCTION_ENDED, itemModel.AUCTION_FAILED]})
      .where("item_group.isOpen = 1")
      .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type")
      .select();
    let user = await this.session("user");
    if (!think.isEmpty(user)) {
      let followingItems = await this.model("follow").field("item").where({user: user["id"]}).select();
      let itemIds = followingItems.map((f)=>f["item"]);
      items.map((i)=> {
        return (itemIds.indexOf(i["id"]) !== -1) ? i["following"] = true : i["following"] = false
      });
    } else {
      items.map((i)=> {
        return i["following"] = null
      });
    }
    return this.success(items);
  }

  async auctionNotStartAction() {
    let itemModel = this.model("item");
    let items = await this.model("item")
      .setRelation(false)
      .join("item_group on item.group = item_group.id")
      .join("item_type on item.type = item_type.id")
      .where({status: itemModel.AUCTION_NOT_STARTED})
      .where("item_group.isOpen = 1")
      .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type")
      .select();
    let user = await this.session("user");
    if (!think.isEmpty(user)) {
      let followingItems = await this.model("follow").field("item").where({user: user["id"]}).select();
      let itemIds = followingItems.map((f)=>f["item"]);
      items.map((i)=> {
        return (itemIds.indexOf(i["id"]) !== -1) ? i["following"] = true : i["following"] = false
      });
    } else {
      items.map((i)=> {
        return i["following"] = null
      });
    }
    return this.success(items);

  }

  //返回某个拍品的所有竞拍记录
  async getBidAction() {
    let itemId = this.param("id");
    let res = await this.model("bid").getItemBids(itemId);
    return this.success(res);
  }

  //竞拍某样物品
  //传入参数 auctionPrice：竞拍价格，itemId: 竞拍物品；
  async bidAction() {
    let now = +new Date();

    let config = think.model('config', null, 'api');

    let user = await this.session("user");
    if (think.isEmpty(user))
      return this.fail();
    let userId = user["id"];
    let value = this.param("auctionPrice");
    let itemid = this.param("itemId");
    let res = await this.model("bid").addOne({
      user: userId,
      item: itemid,
      value: value,
      status: this.model("bid").LEADING
    });//res=0 if failed
    //将新的价格数据返回给前端。
    let item = await this.model("item").setRelation(false).where({id: itemid}).find();


    //时间领先
    if (item.auctionType == 0) {
      let time = config.get('auction.ahead_time.time');

      if (item.auctionEndTime < now + time) {
        item.auctionEndTime = now + time;
        await this.model("item").where({id: itemid}).update({auctionEndTime: item.auctionEndTime});
        this.model("item").setCheckStatusTimer(item.auctionEndTime - now);
      }
    }
    //固定时间
    else if (item.auctionType == 1) {
      let need_delay_time = config.get('auction.fix_time.need_delay_time');
      let auto_delay_time = config.get('auction.fix_time.auto_delay_time');
      if (now + need_delay_time > item.auctionEndTime) {
        item.auctionEndTime += auto_delay_time;
        await this.model("item").where({id: itemid}).update({auctionEndTime: item.auctionEndTime});
        this.model("item").setCheckStatusTimer(item.auctionEndTime - now);
      }
    }
    let newStage = await this.model("item").getStage(item["currentPrice"]);
    return this.success({id: res, newPrice: item["currentPrice"], newStage: newStage});
  }

  async followAction() {
    let user = await this.session("user");
    if (think.isEmpty(user))
      return this.fail();
    let userId = user.id;
    let itemId = this.param("itemId");
    let state = this.param("state");
    if (state)
      return this.success(await this.model("follow").add({user: userId, item: itemId}));
    else
      return this.success(await this.model("follow").where({user: userId, item: itemId}).delete());
  }

  async groupAction() {
    let groupId = this.param("id");
    let group = await this.model("item_group").selectData(groupId);
    let data = await this.model("item")
      .setRelation(false)
      .join("item_group on item.group = item_group.id")
      .join("item_type on item.type = item_type.id")
      .where({"item_group.id": groupId})
      .where("item_group.isOpen = 1")
      .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type")
      .select();
    return this.success({group,items:data});
  }

  async detailAction() {
    let itemId = this.param("id"); //获取item id;
    let resItemInfo = await this._detailHelper(itemId);
    let resRelatedItems = await this._relatedItemHelper(itemId);
    let user = await this.session("user");
    if (!think.isEmpty(user)) {
      let userId = user["id"];
      resItemInfo["following"] = await this._followingHelper(userId, itemId);
      for (let r of resRelatedItems)
        r["following"] = await this._followingHelper(userId, r["id"]);
    } else {
      resItemInfo["following"] = null;
      for (let r of resRelatedItems)
        r["following"] = null;
    }
    resItemInfo["relatedItems"] = resRelatedItems;
    return this.success(resItemInfo);
  }

  async _relatedItemHelper(id, userId) {
    let itemInfo = await this.itemModel.setRelation(false).where({"id": id}).find();
    let relatedItems = await this.itemModel.setRelation(false).where({"group": itemInfo["group"]}).field("id").limit(10).select();
    let res = [];
    for (let r of relatedItems) {
      let rDetail = await this._detailHelper(r["id"], userId);
      res.push(rDetail);
    }
    return res;

  }

  async _detailHelper(id) {
    let itemInfo = await this.itemModel.setRelation(false).where({"id": id}).find();
    let imageIds = JSON.parse(itemInfo["image"]);
    itemInfo["bidCount"] = await this.model("bid").where({"item": id}).count();
    itemInfo["followCount"] = await this.model("follow").where({"item": id}).count();
    itemInfo.beginPrice = +itemInfo.beginPrice;
    itemInfo.currentPrice = +itemInfo.currentPrice;
    itemInfo["stage"] = await this.model("item").getStage(itemInfo["currentPrice"]);
    return itemInfo;
  }

  async _followingHelper(userId, itemId) {
    return await this.model("follow").isFollowing(userId, itemId);
  }
}