/**
 * index.js
 * Created by Huxley on 12/10/15.
 */
import {Component, OnInit, Input} from '@angular/core';

let debug = require('debug')('ng:tabview');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
  selector: 'tabview',
  template: template,
  styles: [style],
  directives: [],
  inputs: ['data'],
  //lifecycle: [OnInit]
})
export class TabView implements OnInit {

  public get data() {
    return this._data;
  };

  @Input()
  public set data(val) {
    debug('Load data:', val);

    if (val) {
      this._data = val;
      this.tabs = this.data.tabs;
      this.details = this.data.details;
      this.curTab = 0;
      this.curDetail = 0;

    }

  }

  private _data;

  @Input()
  public small:boolean = false;
  @Input()
  public imageSrc:string = "/assets/img/block.png";

  public tabs = [];
  public details = [];
  public curTab;
  public curDetail;

  ngOnInit() {

  }

  onTabClick(idx) {
    this.curTab = idx;
  }

  onDetailHover(idx) {
    this.curDetail = idx;
  }
}
