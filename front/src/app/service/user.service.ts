import {Injectable, Inject}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {BaseService} from "./base.service";
import {IUserService} from "../service-interface";

import {REQUEST_HOST} from "../app.config"

import {isEmpty} from '../utils'
@Injectable()
export class UserService extends BaseService implements IUserService {

  private _user:User;

  private _userObservable;
  private _userObservers = [];

  public redirectUrl:string;

  public get user() {
    return this._user;
  }

  public set user(val) {
    this._user = val;
    this._userObservers.map((i)=> {
      i.next(val)
    });
  }

  public getUser():Observable<User> {
    if (this.user) {
      return this._userObservable.startWith(this.user);
    }

    //Observable.of(user).delay(500).map((user)=>this.user = <User>user).subscribe();
    this._http.get(this._requestHost + '/api/user', {withCredentials: true}).flatMap(this._extractData)
      .subscribe((user:User)=> {
          this.user = user;
        },
        ()=> {
          this.user = <User>{};
        });

    return this._userObservable;
  }

  public signup(usr:User):Observable<User> {

    // return Observable.of(user).delay(500).map((user)=>this.user = user);
    return <Observable<User>> this._http.post(this._requestHost + '/api/user/signup', usr, {withCredentials: true})
      .flatMap(this._extractData).map((user:User)=>this.user = user);
  }

  public login(usr:User):Observable<User> {
    //return Observable.of(user).delay(500).map((user)=>this.user = user);
    return <Observable<User>> this._http.post(this._requestHost + '/api/user/login', usr, {withCredentials: true})
      .flatMap(this._extractData).map((user:User)=>this.user = user);
  }

  public logout():Observable<User> {
    let user = this.user;
    this.user = <User>{};
    return <Observable<User>> this._http.get(this._requestHost + '/api/user/logout', {withCredentials: true})
      .flatMap(this._extractData)
  }

  public resetPassword(user:User):Observable<User> {
    return Observable.of(user);
  }

  constructor(private _http:Http, @Inject(REQUEST_HOST)
  private _requestHost:string) {
    super();
    this._userObservable = Observable.create((observer)=> {
      this._userObservers.push(observer);
    });
  }

}
