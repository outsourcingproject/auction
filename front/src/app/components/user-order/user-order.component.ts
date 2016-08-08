import {Component, OnInit, ViewChild, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {PagerComponent} from "../pager";
import {Observable} from "rxjs/Observable";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {REQUEST_HOST} from "../../app.config";

let orders = require('./order.json');

@Component({
  selector: 'user-auction',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  viewProviders: [BS_VIEW_PROVIDERS],
  directives: [PagerComponent, MODAL_DIRECTIVES, PagerComponent]
})
export class UserOrderComponent implements OnInit {
  public data = [];

  public pageSize:number = 12;

  public pagedData;

  public selected = {};

  constructor(private _http:Http,
              @Inject(REQUEST_HOST)
              private _requestHost:string) {

  }

  ngOnInit() {

    this._http.get(this._requestHost + '/api/user/order', {withCredentials: true})
      .map((res)=>res.json().data)
      .subscribe((data)=> {
        this.data = data;
      });

    //Observable.of(orders).delay(500).subscribe((data)=>this.data = data);
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  @ViewChild('auctionConfirmModal')
  public auctionConfirmModal:ModalDirective;

  public onAuctionConfirm(order) {
    this.selected = order;
    this.auctionConfirmModal.show();
  }

  public onAuctionConfirmSubmit() {
    //TODO:Submit Auction Confirm
    this.selected = {};
    this.auctionConfirmModal.hide();
  }

  @ViewChild('payModal')
  public payModal:ModalDirective;

  public onPay(order) {
    this.selected = order;
    this.payModal.show();
  }

  public onPaySubmit() {
    //TODO:Submit Pay
    this.selected = {};
    this.payModal.hide();
  }

  @ViewChild('receiveConfirmModal')
  public receiveConfirmModal:ModalDirective;

  public onReceiveConfirm(order) {
    this.selected = order;
    this.receiveConfirmModal.show();
  }

  public onReceiveConfirmSubmit() {
    //TODO:Submit Receive Confirm
    this.selected = {};
    this.receiveConfirmModal.hide();
  }
}
