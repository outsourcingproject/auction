import {Component, ViewChild, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {PagerComponent} from "../pager";
import {
  ModalDirective, MODAL_DIRECTIVES, TimepickerComponent,
  DATEPICKER_DIRECTIVES, BS_VIEW_PROVIDERS
} from "ng2-bootstrap/ng2-bootstrap";
import {ItemGroup} from "../../entities/itemGroup";
import {REQUEST_HOST} from "../../app.config";
import {AdminSearchComponent} from "../admin-search/admin-search.component";

let data = require('./data.json');

@Component({
  selector: 'admin-item-group',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES,AdminSearchComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminItemGroupComponent implements OnInit {

  public data = []//data;
  public searchedDate;
  public pagedData;

  public pageSize = 15;

  public selected = null;
  public curr = new ItemGroup();

  private _requestHost: string = REQUEST_HOST;

  @ViewChild('addOrUpdateModal')
  public addOrUpdateModal: ModalDirective;

  constructor(private _http: Http, private _router: Router) {
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  private _getData() {
    this._http.get(this._requestHost + '/rest/item_group', {withCredentials: true})
      .map((res)=> {
        let data = res.json().data;
        delete data.item;
        console.log(data);
        return data;
      })
      .subscribe((data)=> {
        this.data = data;
      })
  }

  ngOnInit() {
    this._getData();
  }

  public onModify(idx) {
    this.selected = idx;
    this.curr = JSON.parse(JSON.stringify(this.searchedDate[idx]));
    this.addOrUpdateModal.show();
  }

  public onAdd() {
    this.selected = null;
    this.addOrUpdateModal.show();
    this.curr = new ItemGroup();
  }

  public onToggle(idx) {
    this.selected = idx;
    this.curr = this.searchedDate[idx];

    this.curr.isOpen = this.curr.isOpen ? 0 : 1;

    //put
    this._http.post(this._requestHost + '/rest/item_group/' + this.curr.id + '?_method=put', this.curr, {withCredentials: true})
      .subscribe(()=> {
        this._getData();
      })
  }

  public onSubmit() {
    if (this.selected != null) {
      //put
      this._http.post(this._requestHost + '/rest/item_group/' + this.curr.id + '?_method=put', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData();
          this.addOrUpdateModal.hide();
        });
    } else {
      //post
      this._http.post(this._requestHost + '/rest/item_group', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData();
          this.addOrUpdateModal.hide();
        });

    }
  }


}
