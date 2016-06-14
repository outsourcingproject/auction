/**
 * index.js.js
 * Created by Huxley on 12/9/15.
 */
import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

let debug = require('debug')('ng:masterbar');
let template = require('./template.html');
let style = require('./style.scss');
const menus = require('./config.json');

@Component({
  selector: 'master-bar',
  template: template,
  styles: [style],
  directives: []
})
export class MasterBar {
  public menus;

  constructor(@Inject(Router)
              private router) {
    this.menus = menus;
  }

  search(keywords) {
    debug(`search ${keywords}`);
    // TODO
  }
}
