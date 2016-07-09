import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {AucItemDetailed} from '../../components/auc-item-detailed';

let debug = require('debug')('ng:auc-list');
let config = require('./config.json');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
  selector: 'auc-list',
  template: template,
  styles: [style],
  directives: [AucItemDetailed]
})
export class AucListComponent {
  @Input()
  public data:Array<{id:number,images:Array<string>,
    name:string,currentPrice:number,auctionTimes:number,
    follow:number,auctionEndTime:number,watching:boolean,type:number}> = config;

  @Input()
  public pagedData:Array<{id:number,images:Array<string>,
    name:string,currentPrice:number,auctionTimes:number,
    follow:number,auctionEndTime:number,watching:boolean,type:number}> = [];

  @Output()
  public filteredDataChange = new EventEmitter<Array<Object>>();

  public filters:Array<string>;
  public orders:Array<string>;


  public filterSelected:number = 0;
  public orderSelected:number = 0;


  constructor(private _http:Http) {

    this.filters = ['全部'];
    new Set(this.data.map((i)=>i.type)).forEach((i)=>this.filters.push(i));

    this.orders = ["默认", "价格", "出价数", "人气", "截拍时间"];


  }

  ngOnInit() {
    setTimeout(()=>this._updateFilteredData(), 1000);
  }

  public onFilterClick(idx) {
    this.filterSelected = idx;
    this._updateFilteredData();
  }

  public onOrderClick(idx) {
    this.orderSelected = idx;
    this._updateFilteredData();
  }

  private _updateFilteredData() {
    let sortArr = ['id', 'currentPrice', 'auctionTimes', 'follow', 'auctionEndTime'];
    let filteredData = this.data
      .filter((i)=>!this.filterSelected || i.type == this.filters[this.filterSelected])
      .sort((i, j)=>j[sortArr[this.orderSelected]] - i[sortArr[this.orderSelected]]);
    debug(filteredData);
    this.filteredDataChange.emit(filteredData);
  }

}
