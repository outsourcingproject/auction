import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager/pager.component";
import {Order} from "../../entities/order";
import {REQUEST_HOST} from "../../app.config";

import {
  ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
  DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";
import {AdminSearchComponent} from "../admin-search/admin-search.component";

let data = require('./data.json');
let expressNames = require('./expressNames.json');
@Component({
  selector: 'admin-order',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES,AdminSearchComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminOrderComponent implements OnInit {

  public data:Array<Order> = [];
  public expressNames:Array<string> = expressNames;

  public pageSize:number = 15;
  public searchedData;
  public pagedData;

  public selected:Order = null;

  public _requestHost:string = REQUEST_HOST;

  public expressName = null;
  public expressNo = null;


  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {

    this._getData().subscribe((data)=>this.data = data);

    // Observable.of(data).delay(500).subscribe((data)=> {
    //   this.data = data;
    // })
  }

  private _getData() {
    return this._http.get(this._requestHost + '/rest/order', {withCredentials: true})
      .map(res=>res.json().data);
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }


  @ViewChild('orderTimeoutModal')
  public orderTimeoutModal:ModalDirective;

  public orderTimeout(idx) {
    this.selected = this.searchedData[idx];
    this.orderTimeoutModal.show();
  }

  public orderTimeoutSubmit() {
    this.selected.status = 6;//已取消
    this._http.post(this._requestHost + '/rest/order/' + this.selected.id + '?_method=put', this.selected, {withCredentials: true})
      .subscribe(()=> {
        this._getData();
        this.orderTimeoutModal.hide();
      })
  }

  @ViewChild('confirmPayModal')
  public confirmPayModal:ModalDirective;

  public confirmPay(idx) {
    this.selected = this.searchedData[idx];
    this.confirmPayModal.show();
  }

  public confirmPaySubmit() {
    this.selected.status = 3;//待发货
    this._http.post(this._requestHost + '/rest/order/' + this.selected.id + '?_method=put', this.selected, {withCredentials: true})
      .subscribe(()=> {
        this._getData();
        this.confirmPayModal.hide();
      })
    this._http.post(this._requestHost + '/rest/user/' + this.selected.uid + '?_method=put', {remainCreditLines: this.selected.remainCreditLines+this.selected.price}, {withCredentials: true})
      .subscribe(()=> {
    });  
  }

  @ViewChild('deliveryGoodModal')
  public deliveryGoodModal:ModalDirective;

  public deliveryGood(idx) {
    this.selected = this.searchedData[idx];
    this.deliveryGoodModal.show();
  }

  public deliveryGoodSubmit() {
    this.selected.status = 4;//待发货
    this.selected.expressName = this.expressName;
    this.selected.expressNo = this.expressNo;
    this._http.post(this._requestHost + '/rest/order/' + this.selected.id + '?_method=put', this.selected, {withCredentials: true})
      .subscribe(()=> {
        this._getData();
        this.deliveryGoodModal.hide();
      })
  }

  @ViewChild('orderDetailModal')
  public orderDetailModal:ModalDirective;

  public orderDetail(idx) {
    this.selected = this.searchedData[idx];
    this.orderDetailModal.show();
  }
}
