import {Component, OnInit, ViewChild} from '@angular/core'
import {PagerComponent} from "../pager";
import {Observable} from "rxjs/Observable";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

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

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  ngOnInit() {
    Observable.of(orders).delay(500).subscribe((data)=>this.data = data);
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
