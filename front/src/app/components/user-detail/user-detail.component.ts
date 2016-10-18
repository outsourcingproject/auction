import {Component, Input, OnInit, OnDestroy, Inject} from '@angular/core'
import {UserService} from "../../service";
import {User} from '../../entities/user';
import {Observable} from "rxjs/Observable";
import {REQUEST_HOST} from "../../app.config";

let debug = require('debug')('ng:user-detail');
/*let user = require('./user.json');*/
@Component({
  selector: 'user-detail',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class UserDetailComponent implements OnInit,OnDestroy {

  public user:User = new User();
  public sub;
  private _requestHost:string = REQUEST_HOST;

  constructor(private _userService:UserService) {

  }

  ngOnInit() {
    this.sub = this._userService.getUser()
      .map((user)=> {
        user.avatarUrl = this._requestHost + '/rest/image/' + user.avatar;
        return user;
      })
      .subscribe((user)=> {
        debug(user);
        this.user = <User>user;
      });
    // Observable.of(user).delay(500).subscribe().subscribe((user)=> {
    //   this.user = <User>user;
    // });
    this._userService.flushUser();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
