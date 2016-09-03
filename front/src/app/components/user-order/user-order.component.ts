import {Component, OnInit, ViewChild, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {Router} from '@angular/router'
import {PagerComponent} from "../pager";
import {Observable} from "rxjs/Observable";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {REQUEST_HOST} from "../../app.config";
import {Order} from "../../entities/order";
import {isEmpty} from "../../utils/utils";
import {Address} from "../../entities/address";

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

  public addressList:Array<Address> = [];
  public selectedAddressIdx = null;

  private _requestHost:string = REQUEST_HOST;


  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {

    this._getData()
      .subscribe((data)=> {
        this.data = data;
        this.addressList.map((i, idx)=>i.isDefault ? this.selectedAddressIdx = idx : null);
      });
    //Observable.of(orders).delay(500).subscribe((data)=>this.data = data);
  }

  private _getData() {
    this._http.get(this._requestHost + "/rest/address", {withCredentials: true})
      .map((res)=>res.json().data)
      .subscribe((data)=> {
        this.addressList = data;
      });

    return this._http.get(this._requestHost + "/rest/address", {withCredentials: true})
      .map((res)=>this.addressList = res.json().data).flatMap(()=> {
        return this._http.get(this._requestHost + '/api/user/order', {withCredentials: true})
          .map((res)=>res.json().data)
      })
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

  public setSelectedAddressIdx(idx) {
    this.selectedAddressIdx = idx;
  }

  public onAuctionConfirmSubmit() {
    let address = this.addressList[this.selectedAddressIdx];
    this.selected.address = `收货地址：${ address.province } ${ address.city } ${ address.district } ${ address.address } 收货人：${ address.name }  电话：${ address.phoneNum }`;
    this.selected.status = 1;

    //put
    this._http.post(this._requestHost + "/rest/order/" + this.selected.id + "?_method=put", this.selected, {withCredentials: true})
      .subscribe(()=> {
        this.auctionConfirmModal.hide();
      }, ()=> {
        alert('确认失败，请重试');
      });
    this.selected = <Order> {};

  }

  public addOrModifyAddress() {
    this.auctionConfirmModal.hide();
    setTimeout(()=>this._router.navigate(['/user/account']), 500);

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

  @ViewChild('orderDetailModal')
  public orderDetailModal:ModalDirective;

  public orderDetail(idx) {
    this.selected = this.data[idx];
    console.log(this.selected);
    this.orderDetailModal.show();
  }

}
