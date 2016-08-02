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
import {Item} from "../../entities/item";

let data = require('./data.json');

let debug = require('debug')('ng:admin-item');
let itemGroup = require('./item-group.json');
let auctionType = require('../admin-auction/auction-type.json');

@Component({
  selector: 'admin-item',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES, TimepickerComponent, DATEPICKER_DIRECTIVES, UEditorComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminItemComponent implements OnInit {

  public itemGroup=[];
  public auctionType=[];
  public data = [];
  
  public pageSize:number = 15;
  public pagedData;

  public selected = null;
  public curr = new Item();

  @ViewChild('addOrUpdateModal')
  public addOrUpdateModal:ModalDirective;

  @ViewChild('delConfirmModal')
  public delConfirmModal:ModalDirective;

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(itemGroup).delay(400).subscribe((data)=>this.itemGroup = data);
    Observable.of(auctionType).delay(400).subscribe((data)=>this.auctionType = data);
    Observable.of(data).delay(500).subscribe((data)=>this.data = data);
  }
  public onPagedDataChange(data) {
    this.pagedData = data;
  }
  public onDelete(i) {
    this.selected = i;
    this.delConfirmModal.show();
  }
  public onDeleteSubmit() {
    //TODO: delete the article
    this.delConfirmModal.hide();
  }
  public onModify(i) {
    this.curr = this.selected = i;
    this.addOrUpdateModal.show();
  }

  public onAdd() {
    this.selected = null;
    this.addOrUpdateModal.show();
    this.curr = new Item();
  }
  public onUeditorBlur(data) {
    this.curr.desc = data;
  }
  public onSubmit(){
    if (this.selected) {
      //修改物品
      //TODO:put item : curr

    }
    else {
      //添加物品
      //TODO:post item : curr
    }

    this.addOrUpdateModal.hide();

    debug(this.curr);
  }

}
