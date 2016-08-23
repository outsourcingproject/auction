import {Component, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {PagerComponent} from "../pager";
import {
  ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
  DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";
import {ItemGroup} from "../../entities/itemGroup";

let data = require('./data.json');

@Component({
  selector: 'admin-item-group',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminItemGroupComponent {

  public data = data;
  public pagedData;

  public pageSize = 10;

  public selected = null;
  public curr = new ItemGroup();


  @ViewChild('addOrUpdateModal')
  public addOrUpdateModal:ModalDirective;

  constructor(private _http:Http, private _router:Router) {
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  public onModify(idx) {
    this.selected = idx;
    this.curr = this.data[idx];
    this.addOrUpdateModal.show();
  }

  public onAdd() {
    this.selected = null;
    this.addOrUpdateModal.show();
    this.curr = new ItemGroup();
  }

  public onToggle(idx) {
    this.selected = idx;
    this.curr = this.data[idx];

    this.curr.isOpen = this.curr.isOpen ? 0 : 1;

    //TODO: put data
  }

  public onSubmit() {
    if (this.selected != null) {

      //TODO: put
    } else {

      //TODO: post
    }
  }


}
