/**
 * index.js
 * Created by Huxley on 12/3/15.
 */

import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {User} from "../../entities/user";
import {UserService} from "../../service/user.service";
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

let style = require('./style.styl');
let template = require('./template.html');
let debug = require('debug')('ng:signup-form');


@Component({
  selector: 'signup-form',
  template: template,
  styles: [style],
  directives: [AlertComponent]
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
        this._router.navigate(['/signup-success']);
      },
      (err)=> {
        this._router.navigate(['/signup-fail']);
      });
  }
}
