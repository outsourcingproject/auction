/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit, Injectable ,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {SplitComponent} from "../../components/split/split.component";
import {AucListComponent} from "../../components/auc-list";
import {PagerComponent} from "../../components/pager";
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";

let debug = require('debug')('ng:auction-end');
let template = require('./template.html');
let style = require('./style.styl');

let data = require('../auctioning/data.json');

@Component({
  selector: 'auction-end',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, SplitComponent, AucListComponent, PagerComponent]
})
export class AuctionEnd implements OnInit {
  public data = [];
  private dataUrl;
  private imageUrl;

  constructor(private _http:Http, @Inject(REQUEST_HOST) private _requestHost:string) {
    this.dataUrl = REQUEST_HOST + "/api/item/auctioned";
    this.imageUrl = REQUEST_HOST.replace('http:','') + "/rest/image/"
  }

  ngOnInit() {
    if ('production' === ENV) {
      // Application wide providers
      this._http.get(this.dataUrl)
           .toPromise()
           .then(res => res.json().data)
           .then(data => {
             data.map(d =>{
               d["images"] = JSON.parse(d["image"]).map((i)=>this.imageUrl+i);
               //d["image"] = this.imageUrl + d["image"][0];
             });
             console.log(data);
              this.data = data;
            })
           .catch(this.handleError);
    }else{
      Observable.of(data).delay(500).subscribe((data)=> {
        this.data = data
        console.log(this.data);
      });
    }
  }
  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
