import {Component, ViewChild, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager";

import {
  ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
  DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";

import {UEditorComponent} from "../ueditor/ueditor.component";


let data = require('./data.json');
let itemGroup = require('../admin-item/item-group.json');
let auctionType = require('./auction-type.json');

let debug = require('debug')('ng:admin-auction');
@Component({
  selector: 'admin-auction',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES, TimepickerComponent, DATEPICKER_DIRECTIVES, UEditorComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminAuctionComponent implements OnInit {

  public itemGroup = [];
  public auctionType = [];
  public data = [];

  public pageSize:number = 15;
  public pagedData;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(itemGroup).delay(400).subscribe((data)=>this.auctionType = data);
    Observable.of(auctionType).delay(400).subscribe((data)=>this.itemGroup = data);
    Observable.of(data).delay(500).subscribe((data)=>this.data = data);
  }
}
