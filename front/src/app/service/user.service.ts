import {Injectable}       from '@angular/core';
import {Http, URLSearchParams,Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/User";
@Injectable()
export class UserService {
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
    return this._http.post('/api/user/signup',user).flatMap(this._extractData);
  }

  public login(user:User):Observable<Object> {
    return this._http.post('/api/user/login',user).flatMap(this._extractData);
  }

  public checkAuth(path:string):Observable<boolean> {
    return Observable.of(true).delay(100);

  }

  private _extractData(res: Response):Observable<Object>{
    let body=res.json();
    if(body.errno){
      return Observable.throw(new Error(body.errmsg));
    }
    return Observable.of(body.data);
  }
  constructor(private _http:Http) {

  }
}
