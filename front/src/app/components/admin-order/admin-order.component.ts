import {Component, OnInit, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager/pager.component";
import {Order} from "../../entities/order";
import {REQUEST_HOST} from "../../app.config";

let data = require('./data.json');

@Component({
  selector: 'admin-order',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent]
})
export class AdminOrderComponent implements OnInit {

  public data:Array<Order> = [];

  public pageSize:number = 15;
  public pagedData;

  public selected:Order = null;

  constructor(private _http:Http, private _router:Router,
              @Inject(REQUEST_HOST)
              public _requestHost:string) {

  }

  ngOnInit() {

    this._getDate().subscribe((data)=>this.data = data);

    // Observable.of(data).delay(500).subscribe((data)=> {
    //   this.data = data;
    // })
  }

  private _getDate() {
    return this._http.get(this._requestHost + '/rest/order', {withCredentials: true})
      .map(res=>res.json().data);
  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }
}
