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
import {Address} from "../../entities/address";

let data = require('./data.json');

@Component({
  selector: 'admin-item-group',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent, MODAL_DIRECTIVES,AdminSearchComponent],
  viewProviders: [BS_VIEW_PROVIDERS]
})
export class AdminUserComponent implements OnInit {

  public data = []//data;
  public searchedData;
  public pagedData;

  public pageSize = 15;

  public selected = null;
  public curr = new ItemGroup();

  public currAddresses:Array<Address>=[];

  private _requestUrl: string = REQUEST_HOST;

  @ViewChild('addOrUpdateModal')
  public addOrUpdateModal: ModalDirective;

  @ViewChild('delModal')
  public delModal: ModalDirective;

  constructor(private _http: Http, private _router: Router) {
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }

  private _getData() {
    this._http.get(this._requestUrl + '/rest/user', {withCredentials: true})
      .map(res=>res.json().data)
      .subscribe((data)=> {
        this.data = data;
      })
  }

  ngOnInit() {
    this._getData();
  }

  public onModify(idx) {
    this.selected = idx;
    this.curr = JSON.parse(JSON.stringify(this.searchedData[idx]));

    this._http.get(this._requestUrl + '/rest/address' +"?filter="+ JSON.stringify({user:this.curr.id}) ,{withCredentials: true})
      .map(res=>res.json().data)
      .subscribe((data)=>{
        this.currAddresses=data;
        this.addOrUpdateModal.show();
        console.log(data);
      })

  }

  public onDel(idx) {
    this.selected = idx;
    this.curr = JSON.parse(JSON.stringify(this.searchedData[idx]));
    this.delModal.show();
  }

  public delSubmit() {
    this._http.post(this._requestUrl + '/rest/user/' + this.curr.id + '?_method=delete', this.curr, {withCredentials: true})
      .subscribe(()=> {
        this._getData();
        this.delModal.hide();
      });
  }

  public onSubmit() {
    if (this.selected != null) {
      //put
      this._http.post(this._requestUrl + '/rest/user/' + this.curr.id + '?_method=put', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData();
          this.addOrUpdateModal.hide();
        });
    } else {
      //post
      this._http.post(this._requestUrl + '/rest/user', this.curr, {withCredentials: true})
        .subscribe(()=> {
          this._getData();
          this.addOrUpdateModal.hide();
        });

    }
  }


}
