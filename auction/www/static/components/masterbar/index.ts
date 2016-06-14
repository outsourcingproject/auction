/**
 * index.js.js
 * Created by Huxley on 12/9/15.
 */
import { Component, Inject } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common'
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
let debug = require('debug')('ng:masterbar');
let template = require('./template.html');
let style = require('./style.less');
const menus = require('./config.json');

@Component({
    selector: 'master-bar',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export default class MasterBar {
    public menus;
    constructor(@Inject(Router) private router) {
        this.menus = menus;
    }
    search(keywords) {
        debug(`search ${keywords}`);
        // TODO
    }
}