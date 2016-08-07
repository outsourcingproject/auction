/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component, OnInit, OnDestroy, ViewChild,Injectable ,Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import {ActivatedRoute} from '@angular/router'
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {Observable} from 'rxjs';
import {REQUEST_HOST} from '../../app.config';

let debug = require('debug')('ng:auc-item-shown');
let template = require('./template.html');
let style = require('./style.styl');
const data = require('./config.json');


@Component({
  selector: 'auc-item-shown',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, MODAL_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AucItemShown implements OnInit,OnDestroy {
  public tabsItems:Array<string> = ['拍品描述', '出价记录', '注意事项'];
  public data:{
    id:number,
    name:string,
    foundTime:string,
    foundLocation:string,
    currentPrice:number,
    startPrice:number,
    stage:number,
    bidCount:number,
    status:number,
    followCount:number,
    following:boolean,
    auctionBeginTime:number,
    auctionEndTime:number,
    auctionType:number,
    images:Array<string>,
    relatedItems:Array<Object>
  }
    = {
    id: null,
    name: null,
    foundTime: null,
    foundLocation: null,
    currentPrice: null,
    startPrice: null,
    stage: null,
    bidCount: null,
    status:null,
    followCount:null,
    following:null,
    auctionBeginTime:null,
    auctionEndTime:null,
    auctionType:null,
    images: [],
    relatedItems: []
  };

  public auctionPrice;
  public imagesSelectedIdx;
  public tabsSelectedIdx;
  public relatedItems = [];

  public _currTime:number;

  private _currTimer;
  private dataUrl;
  private sub;

  constructor(private _http: Http, private _route: ActivatedRoute, @Inject(REQUEST_HOST) private _requestHost: string) {
    this.dataUrl = REQUEST_HOST + "/api/item/detail"
  }

  @ViewChild('auctionConfirmModal')
  public auctionConfirmModal:ModalDirective;

  @ViewChild('auctionSuccess')
  public auctionSuccess:ModalDirective;

  ngOnDestroy() {
    if (this._currTimer !== undefined) {
      clearInterval(this._currTimer);
    }
  }

  ngOnInit() {
    if ('production' === ENV){
      this.sub = this._route.params.subscribe(params=>{
        if(params["id"]!= undefined){

        }
      })

    }else{
      Observable.of(data).delay(500).subscribe((data)=> {
        this.data = data;
        this.relatedItems = data.relatedItems;
        this._currTimer = setInterval(()=> {
          this._currTime = this.data.auctionEndTime - new Date().getTime();
        }, 1000);
        this.tabsClick(0);
        this.imagesClick(0);
        this.auctionPrice = this.data.currentPrice + this.data.stage;
      });      
    }

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

  public tabsClick(idx) {
    this.tabsSelectedIdx = idx;
  }

  public onAuctionPriceSubmit() {
    this.auctionConfirmModal.show();
    return false;

  }

  public onAuctionPriceConfirm() {
    //TODO: update db

    this.auctionConfirmModal.hide();
    this.auctionSuccess.show();

  }
}
