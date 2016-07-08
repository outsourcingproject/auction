/**
 * index.js
 * Created by Huxley on 12/3/15.
 */

import {Component, Inject} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {User} from "../../entities/User";

let style=require('./style.styl');
let template = require('./template.html');
let debug = require('debug')('ng:signup-form');


@Component({
  selector: 'signup-form',
  template: template,
  styles:[style],
  directives: []
})
export class SignupForm {
  public user;

  constructor(private _router:Router, private _http:Http) {
    this.user = new User();
  }

  onSubmit() {
    debug(this.user);
    let headers = new Headers({'Content-Type': 'application/json'});
    this._http.post('/signup', JSON.stringify(this.user), {headers: headers}).subscribe(res => {
      let json = res.json();
      if (json && 'OK' === json.status) {
        this._router.navigate(['/user']);
      }
    });
  }
}
