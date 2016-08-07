/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {TabView} from "../../components/tabview/index";
import {Observable} from 'rxjs';

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
export class ArticleComponent implements OnInit {

  public data;
  public leftTab;
  public rightTab;

  constructor(private _http:Http) {

  }


  ngOnInit() {
    if ('production' === ENV) {


    }else{
      Observable.of(tabData).delay(500).subscribe((data)=> {
        this.data = data;
        this.leftTab = data.leftTab;
        this.rightTab = data.rightTab;
      });      
    }
  }
  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
