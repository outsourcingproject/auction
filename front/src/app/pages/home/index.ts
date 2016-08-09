/**
 * index.js
 * Created by Huxley on 12/9/15.
 */

import {Component, OnInit, Injectable ,Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Banner} from '../../components/banner';
import {TabView} from '../../components/tabview';
import {BlockView} from '../../components/blockview';
import {Sidebar} from '../../components/sidebar';
import {AucItem} from '../../components/auc-item';
import {SplitComponent} from "../../components/split/split.component";
import {Observable} from 'rxjs';
import {REQUEST_HOST} from '../../app.config';

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

  private dataUrl ;
  private imageUrl;

  constructor(private _http: Http, @Inject(REQUEST_HOST) private _requestHost:string) {
    this.dataUrl=_requestHost+ "/api/home";
    this.imageUrl = _requestHost + "/rest/image/"
  }

  ngOnInit() {
    this.serviceData = data.service;
    if ('production' === ENV) {
      // Application wide providers
      this._http.get(this.dataUrl)
           .toPromise()
           .then(res => res.json().data)
           .then(data => {
            let groups = data.auctionGroups;
            groups.map((a)=>{
              a.auctions.map(aa=>{
                aa["image"] = JSON.parse(aa["image"]);
                aa["image"] = this.imageUrl + aa["image"][0];
              })
            })
            this.sidebarData = data.auctionGroups;

            this.leftTab = data.lefttab;
            this.rightTab = data.righttab;
            })
           .catch(this.handleError);                
    }else{
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

  private handleError(error: any){
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  }
}
