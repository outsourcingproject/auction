/**
 * index.js
 * Created by Huxley on 12/12/15.
 */
import { Component, OnInit } from 'angular2/core';
import {Input} from "angular2/core";
let debug = require('debug')('ng:blockview');
let template = require('./template.html');
let style = require('./style.less');

@Component({
    selector: 'blockview',
    template: template,
    styles: [style],
    inputs: ['data']
})
export default class Blockview implements OnInit {

    @Input() public data;

    public image;
    public title;
    public content;

    ngOnInit() {
        debug('Load data', this.data);
        this.image = this.data.image;
        this.title = this.data.title;
        this.content = this.data.content;
    }
}