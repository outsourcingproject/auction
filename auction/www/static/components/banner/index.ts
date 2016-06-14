/**
 * index.js
 * Created by Huxley on 12/10/15.
 */

import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
let debug = require('debug')('ng:banner');
let template = require('./template.html');
let style = require('./style.less');
const slides = require('./config.json');

@Component({
    selector: 'banner',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export default class Banner {
    public slides;
    public showIdx;

    constructor() {
        this.slides = slides;
        this.showIdx = 0;
        setInterval(() => {
            this.showIdx = (this.showIdx + 1) % this.slides.length;
        }, 5000);
    }
    onMonitorClick(idx) {
        this.showIdx = idx;
    }
}