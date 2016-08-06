/**
 * index.js
 * Created by Huxley on 12/3/15.
 */

import {Component, Inject} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {User} from "../../entities/user";
import {UserService} from "../../service/user.service";

let style = require('./style.styl');
let template = require('./template.html');
let debug = require('debug')('ng:signup-form');


@Component({
  selector: 'signup-form',
  template: template,
  styles: [style],
  directives: []
})
export class SignupForm {
  public user;
  public submitBtnDisabled:boolean = false;
  
  constructor(private _router:Router, private _userService:UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.submitBtnDisabled=true;
    this._userService.signup(this.user).subscribe(
      (user)=> {
        debug(user);
      },
      (err)=> {
        debug(err);
      });
  }
}
