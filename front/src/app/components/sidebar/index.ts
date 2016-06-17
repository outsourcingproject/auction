/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import {Component, OnInit, Input} from '@angular/core';

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
  public curIdx;

  ngOnInit() {
    debug('Load data', this.data);
    this.data.forEach(item => {
      if (item.image) item.image = `url(${item.image})`;
    });
    this.curIdx = 0;
  }

  onMouseOver(idx) {
    this.curIdx = idx;
  }
}
