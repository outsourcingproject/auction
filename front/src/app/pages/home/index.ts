/**
 * index.js
 * Created by Huxley on 12/9/15.
 */

import {Component, OnInit} from '@angular/core';
import {Banner} from '../../components/banner';
import {TabView} from '../../components/tabview';
import {BlockView} from '../../components/blockview';
import {Sidebar} from '../../components/sidebar';
import {AucItem} from '../../components/auc-item';
import {SplitComponent} from "../../components/split/split.component";
import {Observable} from 'rxjs';

let debug = require('debug')('ng:home');
let template = require('./template.html');
let style = require('./style.styl');

const data = require('./data.json');
const tabData = require('../article/tab-data.json');

@Component({
  selector: 'home',
  template: template,
  styles: [style],
  directives: [Banner, TabView, Sidebar, AucItem, BlockView, SplitComponent]
})
export class Home implements OnInit {
  public leftTab;
  public rightTab;
  public sidebarData = [];
  public serviceData = [];

  public auctionItems = [];

  constructor() {


  }

  ngOnInit() {

    if ('production' === ENV) {
      // Application wide providers

    } else {
      Observable.of(data).delay(500).subscribe((data)=> {
        this.sidebarData = data.auctionGroups;
        this.serviceData = data.service;
      });
      Observable.of(tabData).delay(500).subscribe((tabData)=> {
        this.leftTab = tabData.leftTab;
        this.rightTab = tabData.rightTab;
      });
    }



  }
}
