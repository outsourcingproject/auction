import { CanActivate }    from '@angular/router';
import {Injectable}       from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate() {
    console.log('UserGuard#canActivate called');
    return true;
  }
}
