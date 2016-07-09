import {Injectable}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/User";
import {BaseService} from "./base.service";

@Injectable()
export class UserService extends BaseService {
  public user:User;

  public getDetail():Observable<Object> {
    if (!this.user) {
      return Observable.throw(new Error('user not login'));
    }
    let params = new URLSearchParams();
    params.set('id', this.user.id + '');
    return this._http.get('/api/user/detail', {search: params}).flatMap(this._extractData);
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
