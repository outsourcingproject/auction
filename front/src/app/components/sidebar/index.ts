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
  public data;

  @Output()
  public groupChange = new EventEmitter<Object>();

  public curIdx;


  ngOnInit() {
    debug('Load data', this.data);
    this.onMouseOver(0);
  }

  public onMouseOver(idx) {
    this.curIdx = idx;
    this.groupChange.emit(this.data[idx].auctions);
  }
}
