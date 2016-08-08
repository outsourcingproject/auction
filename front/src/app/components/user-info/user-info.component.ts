import {Component, OnInit, Inject} from '@angular/core'
import {Observable} from "rxjs/Observable";
import {Http} from '@angular/http'

import {REQUEST_HOST} from "../../app.config"

let data = require('./config.json');
@Component({
  selector: 'user-info',
  template: require('./template.html'),
  styles: [require('./style.styl')]

})
export class UserInfoComponent {

  public data = {};

  constructor(private _http:Http,
              @Inject(REQUEST_HOST)
              private _requestHost:string) {
  }

  ngOnInit() {

    this._http.get(this._requestHost+'/api/user/info', {withCredentials: true}).map((res)=>res.json().data)
      .subscribe((data)=>this.data = data);

    // Observable.of(data).delay(500).subscribe((data)=> {
    //   this.data = data;
    // })
  }
}
