/**
 * index.js
 * Created by Huxley on 12/9/15.
 */

import {Component} from '@angular/core';
import {Banner} from '../../components/banner';
import {Tabview} from '../../components/tabview';
import {BlockView} from '../../components/blockview';
import {Sidebar} from '../../components/sidebar';
import {AucItem} from '../../components/auc-item';
import {SplitComponent} from "../../components/split/split.component";

let debug = require('debug')('ng:home');
let template = require('./template.html');
let style = require('./style.styl');

const config = require('./config.json');

@Component({
  selector: 'home',
  template: template,
  styles: [style],
  directives: [Banner, Tabview, Sidebar, AucItem, BlockView,SplitComponent]
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
