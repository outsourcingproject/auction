/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component, OnInit, OnDestroy, ViewChild, Injectable, Inject} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router'
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {Observable} from 'rxjs';
import {REQUEST_HOST} from '../../app.config';
import {isEmpty} from "../../utils/utils";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/User";


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
  public itemBids = [];
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
    status: null,
    followCount: null,
    following: null,
    auctionBeginTime: null,
    auctionEndTime: null,
    auctionType: null,
    image: [],
    relatedItems: []
  };

  public auctionPrice;
  public imagesSelectedIdx;
  public tabsSelectedIdx;
  public relatedItems = [];

  public _currTime:number;
  public auctionPriceSubmitButtonDisable = null;


  private _currTimer;
  private dataUrl;
  private sub;
  private imageUrl;
  private bidUrl;
  private itemId;
  private followUrl;
  private userUrl;
  private _requestHost:string = REQUEST_HOST;


  constructor(private _http:Http, private _router:Router, private _arouter:ActivatedRoute, private _userService:UserService) {
    this.dataUrl = REQUEST_HOST + "/api/item/detail";
    this.imageUrl = REQUEST_HOST.replace('http:', '') + "/rest/image/"
    this.bidUrl = REQUEST_HOST + "/api/item/bid";
    this.followUrl = REQUEST_HOST + "/api/item/follow";
    this.userUrl = REQUEST_HOST + "/api/user";
  }

  @ViewChild('auctionConfirmModal')
  public auctionConfirmModal:ModalDirective;

  @ViewChild('auctionSuccess')
  public auctionSuccess:ModalDirective;

  @ViewChild('auctionFail')
  public auctionFail:ModalDirective;

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this._currTimer !== undefined) {
      clearInterval(this._currTimer);
    }
  }

  ngOnInit() {

    this.sub = this._arouter.params.subscribe(params=> {
      let _id = params["id"];
      this.itemId = _id;
      if (_id !== undefined) {
        this._http.post(this.dataUrl, {id: _id}, {withCredentials: true})
          .toPromise()
          .then(res => res.json().data)
          .then(data => {
            data["images"] = JSON.parse(data["image"]).map(i=>this.imageUrl + i);
            data["relatedItems"].map(r=> {
              r["images"] = JSON.parse(r["image"]).map(i=>this.imageUrl + i);
            });
            this.data = data;
            this.relatedItems = data.relatedItems;
            this._currTimer = setInterval(()=> {
              this._currTime = this.data.auctionEndTime - new Date().getTime();
            }, 1000);
            this.tabsClick(0);
            this.imagesClick(0);
            this.auctionPrice = this.data.currentPrice + this.data.stage;

          })
          .catch(this.handleError);

        this._http.get(this._requestHost + '/api/item/get_bid?id=' + _id, {withCredentials: true}).map((res)=>res.json().data)
          .subscribe((itemBids)=> {
            this.itemBids = itemBids;
          })
      } else {
        //to do id doesn't exit;
      }
    });
    // Observable.of(data).delay(500).subscribe((data)=> {
    //   this.data = data;
    //   this.relatedItems = data.relatedItems;
    //   this._currTimer = setInterval(()=> {
    //     this._currTime = this.data.auctionEndTime - new Date().getTime();
    //   }, 1000);
    //   this.tabsClick(0);
    //   this.imagesClick(0);
    //   this.auctionPrice = this.data.currentPrice + this.data.stage;
    // });
  }

  public imagesClick(idx) {
    this.imagesSelectedIdx = idx;
  }

  public imagesNav(direction) {
    this.imagesSelectedIdx = (this.imagesSelectedIdx + direction + this.data.image.length) % this.data.image.length;
  }

  public watchIt(state) {
    this._http.get(this.userUrl, {withCredentials: true})
      .toPromise()
      .then(res=>res.json())
      .then(res=> {
        if (isEmpty(res.data))
          this._router.navigate(['/login']);
        else {
          if (state !== this.data.following) {
            this._http.post(this.followUrl, {itemId: this.itemId, state: state}, {withCredentials: true})
              .toPromise()
              .then(res => res.json())
              .then(res => {
                if (res.errno == 0) {
                  this.data.following = state;
                  if (state) ++this.data.followCount;
                  else --this.data.followCount;
                }
              });
          }
        }
      })
    // if (state !== this.data.following) {
    //   this.data.following = state;
    //   if (state) ++this.data.followCount;
    //   else --this.data.followCount;
    // }
  }

  public tabsClick(idx) {
    this.tabsSelectedIdx = idx;
  }

  public onAuctionPriceSubmit() {
    this.auctionPriceSubmitButtonDisable = true;
    this._userService.flushUser().take(1).subscribe(user=> {
      this.auctionPriceSubmitButtonDisable = null;
      console.log(user);
      if (user.creditLines >= this.auctionPrice) {
        this.auctionConfirmModal.show();
      } else {
        alert(`您的信用额度不足以进行此次竞拍\n` + `您的信用额度为 ${user.creditLines} 元，当前出价为 ${this.auctionPrice} 元`);
      }
    });
    return false;
  }

  public onAuctionPriceConfirm() {
    //
    this._http.post(this.bidUrl, {itemId: this.itemId, auctionPrice: this.auctionPrice}, {withCredentials: true})
      .toPromise()
      .then((res)=> res.json())
      .then(res=> {
        if (res.errno != 0) {
          //转到登录页
          this.auctionConfirmModal.hide();
          this._router.navigate(['/login']);
        } else if (res.data !== undefined) {
          let data = res.data;
          if (data.id != 0) {
            this.data.currentPrice = data.newPrice;
            this.data.stage = data.newStage;
            this.auctionPrice = this.data.currentPrice + this.data.stage;
            this.auctionConfirmModal.hide();
            this.auctionSuccess.show();
          } else {
            this.auctionConfirmModal.hide();
            this.auctionFail.show();
          }

        }
        else return false; //this.auctionFail.show();
      });
  }

  private handleError(error:any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
