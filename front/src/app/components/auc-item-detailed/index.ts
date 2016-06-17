/**
 * index.js
 * Created by Huxley on 12/21/15.
 */
import { Component, OnInit, Inject,Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

let debug = require('debug')('ng:auc-item-detailed');
let template = require('./template.html');
let style = require('./style.styl');

@Component({
    selector: 'auc-item-detailed',
    template: template,
    styles: [style],
    inputs: ['data'],
    directives: []
})
export class AucItemDetailed implements OnInit {
    @Input() public data;

    public link;
    public image;
    public name;
    public price;
    public end_time;
    public watch_cnt;
    public watching;

    constructor(@Inject(Router) private _router) {}
    ngOnInit() {
        debug(this.data);
        this.link = this.data.link;
        this.image = this.data.image;
        this.name = this.data.name;
        this.price = this.data.price;
        //this.end_time = this.data.end_time;
        this.end_time = new Date();
        this.watch_cnt = this.data.watch_cnt;
        this.watching = this.data.watching;
    }
    watchIt(state) {
        if (state !== this.watching) {
            this.watching = state;
            if (state) ++this.watch_cnt;
            else --this.watch_cnt;
        }
    }
}
