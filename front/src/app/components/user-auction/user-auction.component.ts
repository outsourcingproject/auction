import {Component, OnInit, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {PagerComponent} from '../pager'
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";
let config = require('./config.json');

@Component({
  selector: 'user-auction',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [PagerComponent]
})
export class UserAuctionComponent implements OnInit {

  public data = [];

  public pageSize:number = 12;
  public pagedData;

  private _requestHost:string = REQUEST_HOST;

  constructor(private _http:Http) {

  }

  ngOnInit() {
    // Observable
    //   .of(config)
    this._http.get(this._requestHost + '/api/user/bid', {withCredentials: true}).map((res)=>res.json().data)
      .map((data)=> {
        return data.map((i)=> {
          i.itemStatus = Math.floor(i.bidStatus / 2) ? 1 : 2;
          return i;
        })
      })
      .subscribe((data)=>this.data = data);

  }

  public onPagedDataChange(data) {
    this.pagedData = data;
  }
}
