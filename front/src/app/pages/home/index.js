/**
 * index.js
 * Created by Huxley on 12/9/15.
 */
"use strict";
var core_1 = require('@angular/core');
var banner_1 = require('../components/banner');
var tabview_1 = require('../components/tabview');
var blockview_1 = require('../components/blockview');
var sidebar_1 = require('../components/sidebar');
var auc_item_1 = require('../components/auc-item');
var debug = require('debug')('ng:home');
var template = require('./template.html');
var style = require('./style.less');
var config = require('./config.json');
var Home = (function () {
    function Home() {
        this.leftTabData = config.lefttab;
        this.rightTabData = config.righttab;
        this.sidebarData = config.sidebar;
        this.auctionItems = config.auctions;
        this.serviceData = config.service;
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: template,
            styles: [style],
            directives: [banner_1.default, tabview_1.default, sidebar_1.default, auc_item_1.default, blockview_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
//# sourceMappingURL=index.js.map