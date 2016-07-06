/**
 * index.js.js
 * Created by Huxley on 12/9/15.
 */
import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

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

  public search(keywords) {
    debug(`search ${keywords}`);
    // TODO
  }

  public addFavorite() {
    try {
      window.external.addFavorite();
    } catch (e) {
      try {
        window.sidebar.addPanel();
      }
      catch (e) {
        alert("抱歉，您使用的浏览器无法完成此操作。\n\n请使用Ctrl+D进行添加");
      }
    }
  }

}
