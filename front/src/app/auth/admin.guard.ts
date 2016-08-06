import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import {Injectable}       from '@angular/core';
import {UserService}      from "../service/user.service";
import {isEmpty} from "../utils/utils";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _userService:UserService, private _router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    console.log('admin-guard');
    return this._userService.getUser().map((user)=> {
      if (isEmpty(user)) {
        console.log('not login in');
        this._router.navigate(['/login']);
        this._userService.redirectUrl = state.url;
        return false;
      }else if(user.role!=3){
        console.log('not have authority ');
        this._router.navigate(['/login']);
        this._userService.redirectUrl = state.url;
        return false;
      }
      return true;
    }).take(1);

  }
}
