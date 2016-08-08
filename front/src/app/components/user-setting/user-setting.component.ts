import {Component, OnInit, Inject} from '@angular/core'
import {Http} from '@angular/http';
import {User}      from '../../entities/user'
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {TimepickerComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AreaPickerComponent} from "../area-picker";
import {Address} from "../../entities/address";
import {Observable} from "rxjs";
import {REQUEST_HOST} from "../../app.config";

let addressList = require('./address-list.json');
let debug = require('debug')('ng:user-setting');

@Component({
  selector: 'user-setting',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [AlertComponent, TimepickerComponent, DATEPICKER_DIRECTIVES, AreaPickerComponent]
})
export class UserSettingComponent implements OnInit {

  public date = new Date();
  public time = new Date();
  public user = new User();

  public showPwdWorn:boolean;
  public showSuccess:boolean;

  public addressList:Array<Address> = [];
  public newAddress:number = 0;
  public selectedAddressIdx:number = null;
  public currAddress:Address = new Address();
  public activeDefaultAddressIdx:number;


  constructor(private _http:Http,
              @Inject(REQUEST_HOST)
              private _requestHost:string) {

  }

  ngOnInit() {
    this._http.get(this._requestHost + "/rest/address", {withCredentials: true})
      .map((res)=>res.json().data)
      .subscribe((data)=> {
        this.addressList = data;
      });

    // Observable.of(addressList).delay(500).subscribe((data)=> {
    //   this.addressList = data;
    // });
  }

  onSubmitPwdReset() {
    this._http.post(this._requestHost + "/api/user/pwd_reset", this.user, {withCredentials: true})
      .map((res)=>res.json()).subscribe((res)=> {
      if (res.errno) {
        this.showSuccess = false;
        this.showPwdWorn = true;
      } else {
        this.showSuccess = true;
        this.showPwdWorn = false;
      }
    })
  }

  public onNewAddressClick() {
    if (this.newAddress == 0) {
      this.selectedAddressIdx = null;
      this.currAddress = new Address();
    }
    this.newAddress = this.newAddress ? 0 : 1;
    debug(this.newAddress, this.selectedAddressIdx);
  }

  public setActiveDefaultAddressIdx(idx) {
    this.activeDefaultAddressIdx = idx;
  }

  public setDefaultAddress(idx) {
    let oldDefault:Address = this.addressList.filter((i)=><boolean>i.isDefault)[0];
    oldDefault.isDefault = 0;

    this.addressList[idx].isDefault = 1;

    this._http.put(this._requestHost + '/rest/address/' + this.addressList[idx].id, this.addressList[idx], {withCredentials: true})
      .subscribe();
    this._http.put(this._requestHost + '/rest/address/' + oldDefault.id, oldDefault, {withCredentials: true})
      .subscribe();
  }

  public setSelectedAddressIdx(idx) {
    this.selectedAddressIdx = idx;
    if (idx !== null && idx !== undefined) {
      this.currAddress = this.addressList[idx];
    }
  }

  public onAddressSubmit(data) {
    if (this.newAddress) {
      this.addressList.push(data);
      this._http.post(this._requestHost + '/rest/address', data, {withCredentials: true})
        .subscribe();
    } else {
      console.log(data);
      this._http.put(this._requestHost + '/rest/address/' + data.id, data, {withCredentials: true})
        .subscribe();
    }

    this.setSelectedAddressIdx(null);
    this.newAddress = 0;
  }
}
