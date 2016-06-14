/**
 * index.js
 * Created by Huxley on 1/10/16.
 */
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import AucItemDetailed from '../auc-item-detailed';
let debug = require('debug')('ng:auc-item-shown');
let template = require('./template.html');
let style = require('./style.less');
const config = require('./config.json');

@Component({
    selector: 'auc-item-shown',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES, AucItemDetailed]
})
export default class AucItemShown {
    public header;
    public id;
    public name;
    public price;
    public startTime;
    public endTime;
    public watchCnt;
    public watching;
    public navname;
    public snapshots;
    public snapshotSelectedIdx;
    public items;
    constructor() {
        this.header = "/static/images/header.png";

        // TODO: Fetch the kvs from the global cache or from the server.
        this.id = config.id;
        this.name = config.name;
        this.price = config.price;
        this.startTime = new Date();
        this.endTime = new Date();
        this.watchCnt = config.watch_cnt;
        this.watching = config.watching;

        this.navname = `${config.found.time}${config.found.location}${config.name}`;
        this.snapshots = config.images;
        this.snapshotSelectedIdx = 0;

        this.items = config.items;
    }
    snapshotClick(idx) {
        this.snapshotSelectedIdx = idx;
    }
    snapshotNav(direction) {
        this.snapshotSelectedIdx = (this.snapshotSelectedIdx + direction + this.snapshots.length) % this.snapshots.length;
    }
    watchIt(state) {
        if (state !== this.watching) {
            this.watching = state;
            if (state) ++this.watchCnt;
            else --this.watchCnt;
        }
    }
}
