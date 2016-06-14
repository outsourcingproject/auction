/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Input} from "angular2/core";
let debug = require('debug')('ng:sidebar');
let template = require('./template.html');
let style = require('./style.less');

@Component({
    selector: 'sidebar',
    template: template,
    styles: [style],
    inputs: ['data'],
    directives: [ROUTER_DIRECTIVES]
})
export default class Sidebar implements OnInit {
    @Input() public data;
    public curIdx;
    ngOnInit() {
        debug('Load data', this.data);
        this.data.forEach(item => {
            if (item.image) item.image = `url(${item.image})`;
        });
        this.curIdx = 0;
    }
    onMouseOver(idx) { this.curIdx = idx; }
}