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
}