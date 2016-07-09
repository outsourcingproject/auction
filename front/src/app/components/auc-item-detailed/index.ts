/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit, Inject, Input} from '@angular/core';

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
    name:string,currentPrice:number,auctionTimes:number,
    follow:number,auctionEndTime:number,watching:boolean,type:number};

  public id:number;
  public currentPrice:number;
  public link;
  public image:string;
  public name:string;
  public currentPrice:number;
  public auctionTimes:number;
  public follow:number;
  public auctionEndTime;
  public watching:boolean;
  public type:string;

  constructor() {
  }

  ngOnInit() {
    debug(this.data);
    this.link = ['', this.data.id];
    this.image = this.data.images[0];
    this.name = this.data.name;
    this.currentPrice = this.data.currentPrice;
    //this.end_time = this.data.end_time;
    this.auctionEndTime = this.data.auctionEndTime;
    this.follow = this.data.follow;
    this.watching = this.data.watching;
  }

  watchIt(state) {
    if (state !== this.watching) {
      this.watching = state;
      if (state) ++this.follow;
      else --this.follow;
    }
  }
}


