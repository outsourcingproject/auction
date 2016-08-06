import {Component, Input, OnInit, OnDestroy} from '@angular/core'
import {UserService} from "../../service";
import {User} from '../../entities/user';
import {Observable} from "rxjs/Observable";

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

  constructor(private _userService:UserService) {

  }

  ngOnInit() {
    this.sub = this._userService.getUser().subscribe((user)=> {
      debug(user);
      this.user = <User>user;
    });
    // Observable.of(user).delay(500).subscribe().subscribe((user)=> {
    //   this.user = <User>user;
    // });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
