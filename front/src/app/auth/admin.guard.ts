import { CanActivate }    from '@angular/router';
import {Injectable}       from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate() {
    console.log('AdminGuard#canActivate called');
    return true;
  }
}
