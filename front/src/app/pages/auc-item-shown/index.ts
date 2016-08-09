/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component, OnInit, OnDestroy, ViewChild,Injectable ,Inject} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
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

    image:Array<string>,
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
    image: [],
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
  private imageUrl;

  constructor(private _http: Http, private _route: ActivatedRoute, @Inject(REQUEST_HOST) private _requestHost: string) {
    this.dataUrl = REQUEST_HOST + "/api/item/detail";
    this.imageUrl = REQUEST_HOST + "/rest/image/"
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
        let _id = params["id"];
          if(_id!== undefined){
            this._http.post(this.dataUrl, {id:_id})
                      .toPromise()
                      .then(res => res.json().data)
                      .then(data => {   
                        data["image"] = JSON.parse(data["image"]);
                        data["image"] = this.imageUrl + data["image"][0];
                        data["relatedItems"].map(r=>{
                          r["image"] = JSON.parse(r["image"]);
                          r["image"] = this.imageUrl + r["image"][0];
                        })                     
                        this.data = data;
                        console.log(this.data);
                        this.relatedItems = data.relatedItems;
                        this._currTimer = setInterval(()=> {
                          this._currTime = this.data.auctionEndTime - new Date().getTime();
                        }, 1000);
                        this.tabsClick(0);
                        this.imagesClick(0);
                        this.auctionPrice = this.data.currentPrice + this.data.stage;

                      })
                      .catch(this.handleError);
          }else{
            //to do id doesn't exit;
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
    this.imagesSelectedIdx = (this.imagesSelectedIdx + direction + this.data.image.length) % this.data.image.length;
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
  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
