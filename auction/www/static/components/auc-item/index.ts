/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Input} from "angular2/core";
let debug = require('debug')('ng:auc-item');
let template = require('./template.html');
let style = require('./style.less');

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
    inputs: ['data'],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export default class AucItem implements OnInit {
    @Input() public data;
    public link;
    public name;
    public imageUrl;
    public status;
    public price;
    public mouseOver;

    ngOnInit() {
        debug('Load data', this.data);
        this.link = this.data.link;
        this.name = this.data.name;
        this.imageUrl = `url('${this.data.image}')`;
        this.status = this.data.status;
        this.price = this.data.price;
        this.mouseOver = false;
    }
    onMouseOver() { this.mouseOver = true; }
    onMouseOut() { this.mouseOver = false; }
}