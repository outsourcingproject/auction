import {Injectable}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {BaseService} from "./base.service";
import {IUserService} from "../service-interface";


import {isEmpty} from '../utils'




@Injectable()
export class UserService extends BaseService implements IUserService {
  public user:User;

  public getUser():Observable<Object> {
    if (!this.user) {
      return this._http.get('/api/user').flatMap(this._extractData).map((user)=> {
        this.user = user
      });
    } else {
      return Observable.of(this.user);
    }
  }

  public signup(user:User):Observable<Object> {
    let body = JSON.stringify({username: user.username, password: user.password, email: user.email});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/user/signup', body, options).flatMap(this._extractData);
  }

  public login(user: User): Observable<Object> {
    let body = JSON.stringify({username: user.username, password: user.password});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/user/login', body, options).flatMap(this._extractData);
  }

  public resetPassword(user:User) {
    let body = JSON.stringify({oldpassword: user.password, newpassword: user.pwdReset});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/api/user/reset_password', body, options);

  }

  public checkAuth(path:string):Observable<boolean> {
    return Observable.of(true).delay(100);
  }

  constructor(private _http:Http) {
    super();
  }

}
