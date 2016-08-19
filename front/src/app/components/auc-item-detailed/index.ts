/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit, Inject, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router'
import {REQUEST_HOST} from '../../app.config';

let debug = require('debug')('ng:auc-item-detailed');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
  selector: 'auc-item-detailed',
  template: template,
  styles: [style],
  directives: []
})
export class AucItemDetailed implements OnInit {
  @Input()
  public data:{id:number,images:Array<string>,
    name:string,currentPrice:number,bidCount:number,
    followCount:number,auctionEndTime:number,following:boolean,type:string};

  public id:number;
  public image:string;
  public name:string;
  public currentPrice:number;
  public bidCount:number;
  public followCount:number;
  public auctionEndTime;
  public following:boolean;
  public type:string;

  private followUrl;
  private _requestHost:string = REQUEST_HOST;

  constructor(private _http:Http, private _router:Router) {
    this.followUrl = this._requestHost + "/api/item/follow";
  }

  ngOnInit() {
    debug(this.data);
    this.id=this.data.id;
    this.image = this.data.images?this.data.images[0]:'';
    this.name = this.data.name;
    this.currentPrice = this.data.currentPrice;
    this.bidCount=this.data.bidCount;
    //this.end_time = this.data.end_time;
    this.auctionEndTime = this.data.auctionEndTime;
    this.followCount = this.data.followCount;
    this.following = this.data.following;
  }

  watchIt(state) {
    if ('production' === ENV){
      if(state!==this.following){
          this._http.post(this.followUrl, {itemId:this.id, state:state}, {withCredentials: true})
            .toPromise()
            .then(res => res.json())
            .then(res => {
              if(res.errno == 0){
                this.following = state;
                if(state) ++this.followCount;
                else --this.followCount;
              }
              });
            }
    }else{
      if (state !== this.following) {
        this.following = state;
        if (state) ++this.followCount;
        else --this.followCount;
      }      
    }
  }
}


