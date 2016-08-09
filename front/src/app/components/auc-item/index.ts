/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import {Component, OnInit, Input} from '@angular/core';

let debug = require('debug')('ng:auc-item');
let template = require('./template.html');
let style = require('./style.styl');

const STATUS_WILL = 0;
const STATUS_DOING = 1;
const STATUS_DONE = 2;

/**
 * @input data Object like the following:
 *  { link, name, image, status, price }
 */
@Component({
  selector: 'auc-item',
  template: template,
  styles: [style],
  directives: []
})
export class AucItem implements OnInit {
  @Input()
  public data;
  public id;
  public name;
  public imageUrl;
  public status;
  public price;
  public mouseOver;

  ngOnInit() {
    debug('Load data', this.data);
    this.id = this.data.id;
    this.name = this.data.name;
    this.imageUrl = `url('${this.data.image}')`;
    this.status = this.data.status;
    this.price = this.data.price;
    this.mouseOver = false;
  }

  onMouseOver() {
    this.mouseOver = true;
  }

  onMouseOut() {
    this.mouseOver = false;
  }
}
