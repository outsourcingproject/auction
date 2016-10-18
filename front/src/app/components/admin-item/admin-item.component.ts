import {Component, ViewChild, OnInit, Inject} from '@angular/core';
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

import {ImagePreviewComponent} from "../image-preview"
import {ImageUploaderComponent} from "../image-uploader"
import {REQUEST_HOST} from "../../app.config";

let data = require('./data.json');

let debug = require('debug')('ng:admin-item');
let itemGroup = require('./item-group.json');
let auctionType = require('../admin-auction/auction-type.json');

@Component({
  selector: 'admin-item',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES, TimepickerComponent, DATEPICKER_DIRECTIVES, UEditorComponent, ImagePreviewComponent, ImageUploaderComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminItemComponent implements OnInit {

  public itemGroup = [];
  public auctionType = [];
  public itemType = [];
  public data = [];

  public pageSize: number = 15;
  public pagedData;

  public selected = null;
  public curr = new Item();

  public images = ['', '', ''];

  @ViewChild('addOrUpdateModal')
  public addOrUpdateModal: ModalDirective;

  @ViewChild('delConfirmModal')
  public delConfirmModal: ModalDirective;

  private _requestUrl: string = REQUEST_HOST;

  constructor(private _http: Http,
              private _router: Router) {

  }

  ngOnInit() {
    this.auctionType = auctionType;


    this._getData().subscribe(data=> {
      this.data = data;
    });
    // Observable.of(itemGroup).delay(400).subscribe((data)=>this.itemGroup = data);
    //
    // Observable.of(data).delay(500).subscribe((data)=>this.data = data);
  }

  private _getData() {
    return this._http.get(this._requestUrl + '/rest/item_group', {withCredentials: true})
      .map(res=>res.json().data)
      .flatMap(data=> {
        this.itemGroup = data;
        return this._http.get(this._requestUrl + '/rest/item_type', {withCredentials: true})
          .map(res=>res.json().data)
          .flatMap(data=> {
            this.itemType = data;
            return this._http.get(this._requestUrl + '/rest/item', {withCredentials: true})
              .map(res=>res.json().data)
              .map(data=> {
                let d = data.map(i=> {
                  i.images = JSON.parse(i.image);
                  return i
                });
                console.log(d);
                return d;
              })

          })

      })
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }


  public onAddImg() {
    this.curr.images.length++;
  }

  public onDelImg(i) {
    this.curr.images.splice(i, 1);
  }

  public onDelete(i) {
    this.selected = i;
    this.curr = this.data[i];
    this.delConfirmModal.show();
  }

  public onDeleteSubmit() {

    //delete
    this._http.post(this._requestUrl + '/rest/item/' + this.curr.id + '?_method=delete', {}, {withCredentials: true})
      .subscribe(()=> {
        this.delConfirmModal.hide();
        this._getData().subscribe(data=> {
          this.data = data;
        })
      });

  }

  public onModify(idx) {
    this.selected = idx;
    this.curr = this.data[idx];
    this.addOrUpdateModal.show();
    console.log(this.curr);
  }

  public onAdd() {
    this.selected = null;
    this.addOrUpdateModal.show();
    this.curr = new Item();
  }

  public onUeditorBlur(data) {
    this.curr.desc = data;
  }

  public onSubmit() {
    this.curr.currentPrice = this.curr.beginPrice;
    this.curr.auctionBeginTime = +this.curr.auctionBeginTime;
    this.curr.auctionEndTime = +this.curr.auctionEndTime;

    this.curr.image = JSON.stringify(this.curr.images);

    if (this.selected != null) {
      //修改物品
      //put
      this._http.post(this._requestUrl + '/rest/item/' + this.curr.id + '?_method=put', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData().subscribe(data=>this.data = data);
          this.addOrUpdateModal.hide();
        })

    }
    else {
      //添加物品
      this._http.post(this._requestUrl + '/rest/item', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData().subscribe(data=>this.data = data);
          this.addOrUpdateModal.hide();
        })
    }

  }


}
