/**
 * Created by zl on 2015/12/31.
 */
import Base from './base';
import path from 'path';

export default class Main extends Base {
  indexAction() {
    let options = this.config('tpl');
    options = think.extend({}, options, {type: 'ejs'});
    let file = path.resolve(think.ROOT_PATH, 'www/static/index.html');
    return this.display(file, options);
  }

  async searchAction() {
    let keyword = this.param('keyword');
    let segment = think.segment.doSegment(keyword, {
      simple: true,
      stripPunctuation: true
    });
    let itemModel = think.model('item', null, 'home');
    let allItems = await itemModel.select();
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
    try {
      let result = await think.model('bid', null, 'home').select();
      return this.success(result);
    } catch (err) {
      console.log(err);
      return this.fail(err);
    }

  }
}