/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {MasterBar} from './components/masterbar';

let debug = require('debug')('ng:app');
let template = require('./template.html');
let style = require('./style.styl');


@Component({
  selector: 'app',
  template: template,
  styles: [style],
  directives:[MasterBar]
})
export class App {
  constructor() {
    debug('init');
  }
}
