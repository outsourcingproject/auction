/**
 * index.js
 * Created by Huxley on 12/3/15.
 */

import { Component, Inject } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Router } from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import User from '../../lib/user';
let template = require('./template.html');
let debug = require('debug')('ng:signup-form');

@Component ({
    selector: 'signup-form',
    template: template,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export default class SignupForm {
    public user;
    constructor(@Inject(Router) private _router, @Inject(Http) private _http) {
        this.user = new User();
    }
    onSubmit() {
        debug(this.user);
        let headers = new Headers({'Content-Type': 'application/json'});
        this._http.post('/signup', JSON.stringify(this.user), { headers: headers }).subscribe(res => {
            let json = res.json();
            if (json && 'OK' === json.status) {
                this._router.parent.navigateByUrl('/main');
            }
        });
    }
}
