/**
 * login.js
 * Created by Huxley on 12/1/15.
 */

import { Component, Inject } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import User from '../../lib/user';
let template = require('./template.html');
let style = require('./style.less');
let debug = require('debug')('ng:login-form');

@Component({
    selector: 'login-form',
    template: template,
    styles: [style],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export default class LoginForm {
    public user:User;
    constructor( @Inject(Router) private router, @Inject(Http) private http) {
        this.user = new User();
    }
    onSubmit() {
        let header = new Headers({'Content-Type': 'application/json'});
        this.http.post('/auth', JSON.stringify(this.user), { headers: header }).subscribe(res => {
            let json = res.json();
            if (json) {
                localStorage.setItem('userToken', json.token);
                this.router.parent.navigateByUrl('/main');
            }
        });
    }
}

