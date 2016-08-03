import { CanActivate }    from '@angular/router';
import {Injectable}       from '@angular/core';
import {UserService}      from "../service/user.service";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private _userService:UserService){

  }
  canActivate() {
    console.log('UserGuard#canActivate called');
    return true;
  }
}
