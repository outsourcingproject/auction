/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component, OnInit, Injectable ,Inject, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router'
import {TabView} from "../../components/tabview/index";
import {Observable} from 'rxjs';
import {REQUEST_HOST} from "../../app.config";

let debug = require('debug')('ng:info-shown');
let template = require('./template.html');
let style = require('./style.styl');

const data = require('./data.json');
const tabData = require('./tab-data.json');

@Component({
  selector: 'article',
  template: template,
  styles: [style],
  directives: [TabView]
})
export class ArticleComponent implements OnInit, OnDestroy {

  public data = {};
  public leftTab;
  public rightTab;

  private dataUrl;
  private sub;
  constructor(private _http:Http, private _route: ActivatedRoute, @Inject(REQUEST_HOST) private _requestHost:string) {
    this.dataUrl = REQUEST_HOST + "/rest/article/"
  }


  ngOnInit() {
    if ('production' === ENV) {
    this.sub = this._route.params.flatMap((params)=>this._http.get(this.dataUrl + params["id"]))
      .map((res)=>res.json())
      .subscribe((json)=>{
        this.data = json.data;
        // this.leftTab = this.data.leftTab;
        // this.rightTab = this.data.rightTab;
      })

    }else{
      Observable.of(tabData).delay(500).subscribe((data)=> {
        this.data = data;
        this.leftTab = data.leftTab;
        this.rightTab = data.rightTab;
      });      
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
