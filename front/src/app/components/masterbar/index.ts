/**
 * index.js.js
 * Created by Huxley on 12/9/15.
 */
import {Component, ContentChildren, QueryList} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

let debug = require('debug')('ng:masterbar');
let template = require('./template.html');
let style = require('./style.styl');
const menus = require('./config.json');

@Component({
  selector: 'master-bar',
  template: template,
  styles: [style],
  directives: []
})
export class MasterBar {
  public menus;

  constructor(private _router:Router) {
    this.menus = menus;

  }

  public search(keyword) {
    debug(`search ${keyword}`);
    if (keyword && keyword.length)
      this._router.navigate(['/search', keyword]);
  }

  public addFavorite() {
    alert("抱歉，您使用的浏览器无法完成此操作。\n\n请使用Ctrl+D进行添加");
  }

}
