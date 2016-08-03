import {Injectable}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {BaseService} from "./base.service";
import {IUserService} from "../service-interface";

import {isEmpty} from '../utils'


@Injectable()
export class UserService extends BaseService implements IUserService {
  public user:User;

  public getUser():Observable<Object> {
    return Observable.of({}).delay(500);
  }

  public signup(user:User):Observable<Object> {
    return this._http.post('/api/user/signup', user).flatMap(this._extractData);
  }

  public login(user:User):Observable<Object> {
    return this._http.post('/api/user/login', user).flatMap(this._extractData);
  }

  public resetPassword(user:User, pwd:string) {

  }

  public checkAuth(path:string):Observable<boolean> {
    return Observable.of(true).delay(100);
  }

  constructor(private _http:Http) {
    super();
  }

}
