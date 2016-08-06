/**
 * login.js
 * Created by Huxley on 12/1/15.
 */

import {Component, Inject,} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {User} from "../../entities/user";
import {UserService} from "../../service/user.service";

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
  public submitBtnDisabled:boolean = false;

  constructor(private _router:Router, private _userService:UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.submitBtnDisabled=true;
    this._userService.signup(this.user).subscribe(
      (user)=> {
        debug(user);
        this._router.navigate(['/login-success']);
      },
      (err)=> {
        debug(err);
        this._router.navigate(['/login-fail']);
      });
  }
}

