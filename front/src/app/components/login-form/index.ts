/**
 * login.js
 * Created by Huxley on 12/1/15.
 */

import {Component, Inject,} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {User} from "../../entities/user";

let template = require('./template.html');
let style = require('./style.styl');
let debug = require('debug')('ng:login-form');


@Component({
  selector: 'login-form',
  template: template,
  styles: [style],
  directives: []
})
export class LoginForm {
  public user:User;

  constructor(private _router:Router,private _http:Http) {
    this.user = new User();
  }

  onSubmit() {
    let header = new Headers({'Content-Type': 'application/json'});
    this._http.post('/auth', JSON.stringify(this.user), {headers: header}).subscribe(res => {
      let json = res.json();
      if (json) {
        localStorage.setItem('userToken', json.token);
        this._router.navigate(['/user']);
      }
    });
  }
}

