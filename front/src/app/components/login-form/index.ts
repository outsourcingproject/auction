/**
 * login.js
 * Created by Huxley on 12/1/15.
 */

import {Component, Inject,} from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common"
import {Router} from '@angular/router-deprecated';
import {Http, Headers} from '@angular/http';

import User from '../../lib/user';

let template = require('./template.html');
let style = require('./style.styl');
let debug = require('debug')('ng:login-form');

@Component({
  selector: 'login-form',
  template: template,
  styles: [style],
  directives: [FORM_DIRECTIVES]
})
export class LoginForm {
  public user:User;

  constructor(@Inject(Router)
              private router, @Inject(Http)
              private http) {
    this.user = new User();
  }

  onSubmit() {
    let header = new Headers({'Content-Type': 'application/json'});
    this.http.post('/auth', JSON.stringify(this.user), {headers: header}).subscribe(res => {
      let json = res.json();
      if (json) {
        localStorage.setItem('userToken', json.token);
        this.router.parent.navigateByUrl('/main');
      }
    });
  }
}

