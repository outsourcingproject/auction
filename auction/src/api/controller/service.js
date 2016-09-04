import Base from './base';
import path from 'path';

export default class Service extends Base {

  async searchAction() {
    let keyword = this.param('keyword');
    let segment = think.segment.doSegment(keyword, {
      simple: true,
      stripPunctuation: true
    });
    let itemModel = think.model('item', null, 'api');
    let allItems = await itemModel
      .join("item_type on item.type = item_type.id")
      .field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type,item.createAt as createAt")
      .select();
    let result = allItems
      .map((item)=> {
        let titleHint = 0;
        let contentHint = 0;

        for (let i of segment) {
          titleHint += (item.name || '').split(i).length - 1;
          contentHint += (item.desc || '').split(i).length - 1;
        }
        item.hintTimes = titleHint * 2 + contentHint;
        return item;
      })
      .filter((i)=>i.hintTimes)
      .sort((x, y)=>y.hintTimes - x.hintTimes || y.createAt.valueOf() - x.createAt.valueOf());
    return this.success(result);
  }

  async testAction() {
    await this.session('test', {test: 'ok'});
    let config = think.model('config', null, 'api');
    await config.set('auction.bid_increasment', [{'0': 50}, {'1000': 100}, {'5000': 200}]);

    return this.json(await this.session('test'));
  }
}