/**
 * index.js
 * Created by Huxley on 12/10/15.
 */
import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Input} from "angular2/core";
let debug = require('debug')('ng:tabview');
let template = require('./template.html');
let style = require('./style.less');

@Component({
    selector: 'tabview',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    inputs: ['data'],
    //lifecycle: [OnInit]
})
export default class Tabview implements OnInit {
    @Input() public data;
    public tabs;
    public details;
    public curTab;
    public curDetail;

    ngOnInit() {
        debug('Load data:', this.data);
        this.tabs = this.data.tabs;
        this.details = this.data.details;
        this.curTab = 0;
        this.curDetail = 0;
    }
    onTabClick(idx) { this.curTab = idx; }
    onDetailHover(idx) { this.curDetail = idx; }
}