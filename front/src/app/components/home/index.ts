/**
 * index.js
 * Created by Huxley on 12/9/15.
 */

import {Component} from 'angular2/core';
import {Banner} from '../banner';
import {Tabview} from '../tabview';
import {Blockview} from '../blockview';
import {Sidebar} from '../sidebar';
import {AucItem} from '../auc-item';
let debug = require('debug')('ng:home');
let template = require('./template.html');
let style = require('./style.scss');

const config = require('./config.json');

@Component({
  selector: 'home',
  template: template,
  styles: [style],
  directives: [Banner, Tabview, Sidebar, AucItem, Blockview]
})
export class Home {
  public leftTabData;
  public rightTabData;
  public sidebarData;
  public auctionItems;
  public serviceData;

  constructor() {
    this.leftTabData = config.lefttab;
    this.rightTabData = config.righttab;
    this.sidebarData = config.sidebar;
    this.auctionItems = config.auctions;
    this.serviceData = config.service;
  }
}
