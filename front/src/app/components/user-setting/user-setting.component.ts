import {Component, OnInit} from '@angular/core'
import {User}      from '../../entities/user'
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {TimepickerComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AreaPickerComponent} from "../area-picker";
import {Address} from "../../entities/address";
import {Observable} from "rxjs";

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

  public addressList:Array<Address> = [];

  public newAddress:number = 0;

  public selectedAddressIdx:number = null;

  public currAddress:Address = new Address();

  public activeDefaultAddressIdx:number;

  constructor() {

  }

  ngOnInit() {
    Observable.of(addressList).delay(500).subscribe((data)=> {
      this.addressList = data;
    });
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
    this.addressList = this.addressList.map((i)=> {
      i.isDefault = 0;
      return i;
    });
    this.addressList[idx].isDefault = 1;
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
      debug(data);
    } else {
      // do nothing
    }

    this.setSelectedAddressIdx(null);
    this.newAddress = 0;
  }
}
