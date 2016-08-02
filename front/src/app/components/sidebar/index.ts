/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

let debug = require('debug')('ng:sidebar');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
  selector: 'sidebar',
  template: template,
  styles: [style],
  inputs: ['data'],
  directives: []
})
export class Sidebar implements OnInit {
  @Input()
  public set data(val){
    if(val&&val.length){
      this._data=val;
      debug('Load data', this.data);
      this.onMouseOver(0);
    }
  }
  public get data(){
    return this._data;
  };

  private _data;

  @Output()
  public groupChange = new EventEmitter<Object>();

  public curIdx;


  ngOnInit() {

  }

  public onMouseOver(idx) {
    this.curIdx = idx;
    this.groupChange.emit(this.data[idx].auctions);
  }
}
