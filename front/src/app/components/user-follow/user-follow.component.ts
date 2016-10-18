import {Component, OnInit, Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PagerComponent} from "../pager";
import {REQUEST_HOST} from "../../app.config";

let data = require('./data.json');

@Component({
  selector: 'user-follow',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [PagerComponent]
})
export class UserFollowComponent implements OnInit {

  public data = [];
  public pageSize:number = 15;
  public pagedData;
  private dataUrl;
  private _requestHost:string = REQUEST_HOST;

  constructor(private _http:Http, private _router:Router) {
    this.dataUrl = REQUEST_HOST + "/api/user/follow";
  }

  ngOnInit() {
    this._http.get(this.dataUrl, {withCredentials: true})
      .toPromise()
      .then(res => this.data = res.json().data)
      .catch(this.handleError);
  }

  onPagedDataChange(data) {
    this.pagedData = data;
    console.log(data);

  }

  private handleError(error:any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
