/**
 * index.js
 * Created by Huxley on 12/10/15.
 */
import {Component, OnInit, Input} from '@angular/core';

let debug = require('debug')('ng:tabview');
let template = require('./template.html');
let style = require('./style.less');

@Component({
  selector: 'tabview',
  template: template,
  styles: [style],
  directives: [],
  inputs: ['data'],
  //lifecycle: [OnInit]
})
export default class Tabview implements OnInit {
  @Input()
  public data;
  public tabs;
  public details;
  public curTab;
  public curDetail;

  ngOnInit() {
    debug('Load data:', this.data);
    this.tabs = this.data.tabs;
    this.details = this.data.details;
    this.curTab = 0;
    this.curDetail = 0;
  }

  onTabClick(idx) {
    this.curTab = idx;
  }

  onDetailHover(idx) {
    this.curDetail = idx;
  }
}
