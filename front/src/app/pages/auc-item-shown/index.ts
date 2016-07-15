/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component,OnInit,OnDestroy,ViewChild} from '@angular/core';
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from "ng2-bootstrap/ng2-bootstrap";

let debug = require('debug')('ng:auc-item-shown');
let template = require('./template.html');
let style = require('./style.styl');
const config = require('./config.json');

@Component({
  selector: 'auc-item-shown',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, MODAL_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AucItemShown implements OnInit,OnDestroy{
  public tabsItems:Array<string>=['拍品描述', '出价记录', '注意事项'];
  public data=config;
  public auctionPrice;
  public imagesSelectedIdx;
  public tabsSelectedIdx;
  public relatedItems;

  public _currTime:number;

  private _currTimer;

  constructor() {

    this.relatedItems = config.relatedItems;
    this._currTimer=setInterval(()=>{
      this._currTime=this.data.auctionEndTime-new Date().getTime();
    },1000);

  }

  @ViewChild('auctionConfirmModal')
  public auctionConfirmModal:ModalDirective;

  @ViewChild('auctionSuccess')
  public auctionSuccess:ModalDirective;
  
  ngOnDestroy(){
     clearInterval(this._currTimer);
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

  public onAuctionPriceSubmit(){
    this.auctionConfirmModal.show();
    return false;

  }
  public onAuctionPriceConfirm(){
    //TODO: update db

    this.auctionConfirmModal.hide();
    this.auctionSuccess.show();

  }
}
