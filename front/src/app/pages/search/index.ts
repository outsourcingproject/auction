/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit, Injectable ,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router'
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {SplitComponent} from "../../components/split/split.component";
import {AucListComponent} from "../../components/auc-list";
import {PagerComponent} from "../../components/pager";
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";

let debug = require('debug')('ng:search');
let template = require('./template.html');
let style = require('./style.styl');

let data = require('../auctioning/data.json');

@Component({
  selector: 'search',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, SplitComponent, AucListComponent, PagerComponent]
})
export class Search implements OnInit {
  public data = [];
  private searchUrl;
  private sub;

  constructor(private _http:Http, private _route: ActivatedRoute, @Inject(REQUEST_HOST) private _requestHost:string) {
    this.searchUrl = REQUEST_HOST + "/api/service/search";
  }

  ngOnInit() {
    if ('production' === ENV){
      this.sub = this._route.params.subscribe((params)=>{
        let _keyword = params["keyword"];
        if(_keyword!= null){
          this._http.post(this.searchUrl,{keyword: _keyword})
            .toPromise()
            .then(res => res.json().data)
            .then(data => this.data = data)
            .catch(this.handleError);
        }
      });    
    }else{
      Observable.of(data).delay(500).subscribe((data)=> {
        this.data = data;
        console.log(this.data);
      });      
    }
  }


  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
