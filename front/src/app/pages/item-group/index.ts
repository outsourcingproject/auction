/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import {Component, OnInit, Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router'
import {AucItemDetailed} from '../../components/auc-item-detailed';
import {SplitComponent} from "../../components/split/split.component";
import {AucListComponent} from "../../components/auc-list";
import {PagerComponent} from "../../components/pager";
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";


let template = require('./template.html');
let style = require('./style.styl');

let data = require('./data.json');

@Component({
  selector: 'item-group',
  template: template,
  styles: [style],
  directives: [AucItemDetailed, SplitComponent, AucListComponent, PagerComponent]
})
export class ItemGroup implements OnInit {

  public data = [];
  private dataUrl;
  private imageUrl;
  private groupName;

  private _requestHost:string = REQUEST_HOST

  constructor(private _http:Http, private _route:ActivatedRoute) {
    this.dataUrl = REQUEST_HOST + "/api/item/group";
    this.imageUrl = REQUEST_HOST.replace('http:', '') + "/rest/image/"
  }

  ngOnInit() {
    // Application wide providers
    this._route.params.flatMap((params)=>this._http.post(this.dataUrl, {id: params["id"]}, {withCredentials: true}))
      .map((res)=>res.json().data)
      .subscribe((data)=> {
        console.log(data);
        this.data = data.items.map(d => {
          d["images"] = JSON.parse(d["image"]).map((i)=>this.imageUrl + i);
          return d;
        });
        console.log(this.data);
        this.groupName = data.group.name;
      });
    // Observable.of(data).delay(500).subscribe((data)=> {
    //   this.data = data
    //   console.log(this.data);
    // });
  }

  private handleError(error:any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
