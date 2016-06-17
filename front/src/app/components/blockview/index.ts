/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import {Component, OnInit, Input} from '@angular/core';

let debug = require('debug')('ng:blockview');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
  selector: 'blockview',
  template: template,
  styles: [style],
  inputs: ['data']
})
export class BlockView implements OnInit {

  @Input()
  public data;

  public image;
  public title;
  public content;

  constructor(){
    
  }
  public ngOnInit() {
    debug('Load data', this.data);
    this.image = this.data.image;
    this.title = this.data.title;
    this.content = this.data.content;
  }
}
