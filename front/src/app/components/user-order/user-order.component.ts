import {Component, OnInit, ViewChild, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {PagerComponent} from "../pager";
import {Observable} from "rxjs/Observable";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {REQUEST_HOST} from "../../app.config";
import {Order} from "../../entities/order";

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

  public selected:Order = <Order>{};

  private _requestHost:string = REQUEST_HOST;

  constructor(private _http:Http) {

  }

  ngOnInit() {

    this._getData()
      .subscribe((data)=> {
        this.data = data;
      });

    //Observable.of(orders).delay(500).subscribe((data)=>this.data = data);
  }

  private _getData() {
    return this._http.get(this._requestHost + '/api/user/order', {withCredentials: true})
      .map((res)=>res.json().data)
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
    this.selected = <Order> {};
    this.auctionConfirmModal.hide();
  }

  @ViewChild('payModal')
  public payModal:ModalDirective;

  public onPay(order) {
    this.selected = order;
    this.payModal.show();
  }

  public onPaySubmit() {
    //put
    this._http.post(this._requestHost + '/rest/order/' + this.selected.id + "?_method=put", {status: 2}, {withCredentials: true})
      .subscribe(()=> {
        this.selected = <Order> {};
        this.payModal.hide();
        this._getData().subscribe(data=>this.data = data);
      });

  }

  @ViewChild('receiveConfirmModal')
  public receiveConfirmModal:ModalDirective;

  public onReceiveConfirm(order) {
    this.selected = order;
    this.receiveConfirmModal.show();
  }

  public onReceiveConfirmSubmit() {
    //TODO:Submit Receive Confirm
    this._http.post(this._requestHost + '/rest/order/' + this.selected.id + "?_method=put", {status: 5}, {withCredentials: true})
      .subscribe(()=> {
        this.selected = <Order> {};
        this.receiveConfirmModal.hide();
        this._getData().subscribe(data=>this.data = data);
      });
  }
}
