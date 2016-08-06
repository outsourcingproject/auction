import {Injectable}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {MockBaseService} from "./base.service";
import {IUserService} from "../service-interface";

import {isEmpty} from '../utils'

let debug = require('debug')('sv:user-service');
let user = require('./data/user.json');

@Injectable()
export class MockUserService extends MockBaseService implements IUserService {

  private _user:User;

  private _userObservable;
  private _userObservers = [];

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

    Observable.of(user).delay(500).map((user)=>this.user = <User>user).subscribe();

    return this._userObservable;
  }

  public signup(usr:User):Observable<User> {
    return Observable.of(user).delay(500).map((user)=>this.user = user);
  }

  public login(usr:User):Observable<User> {
    return Observable.of(user).delay(500).map((user)=>this.user = user);
  }

  public logout():Observable<User> {
    let user = this.user;
    this.user = <User>{};
    return Observable.of(user);
  }

  public resetPassword(user:User):Observable<User> {
    return Observable.of(user);
  }

  constructor(private _http:Http) {
    super();
    this._userObservable = Observable.create((observer)=> {
      this._userObservers.push(observer);
    });
  }

}
