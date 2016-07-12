/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component,OnInit} from '@angular/core';
import {AucItemDetailed} from '../../components/auc-item-detailed';

let debug = require('debug')('ng:auc-item-shown');
let template = require('./template.html');
let style = require('./style.styl');
const config = require('./config.json');

@Component({
  selector: 'auc-item-shown',
  template: template,
  styles: [style],
  directives: [AucItemDetailed]
})
export class AucItemShown implements OnInit{
  public tabsItems:Array<string>=['拍品描述', '出价记录', '注意事项'];
  public data=config;
  public auctionPrice;
  public imagesSelectedIdx;
  public tabsSelectedIdx;
  public relatedItems;

  private _auctionPirce:number;

  public get auctionPirce(){
    return this._auctionPirce
  }
  public set auctionPirce(val){
    this._auctionPirce=val;
  }

  constructor() {
    
    this.relatedItems = config.relatedItems;
  }

  ngOnInit(){
    this.tabsClick(0);
    this.imagesClick(0);
    this.auctionPrice=this.data.currentPrice+this.data.stage;
  }
  public imagesClick(idx) {
    this.imagesSelectedIdx = idx;
  }

  public imagesNav(direction) {
    this.imagesSelectedIdx = (this.imagesSelectedIdx + direction + this.data.images.length) % this.data.images.length;
  }

  public watchIt(state) {
    if (state !== this.data.following) {
      this.data.following = state;
      if (state) ++this.data.followCount;
      else --this.data.followCount;
    }
  }

  public tabsClick(idx){
    this.tabsSelectedIdx=idx;
  }
}
