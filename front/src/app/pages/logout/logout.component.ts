import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UserService} from "../../service/user.service";
import {User} from "../../entities/User";
import {isEmpty} from "../../utils/utils";

let debug = require('debug')('ng:logout');

@Component({
  selector: 'logout',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class LogoutComponent implements OnInit,OnDestroy {

  public user:User = <User>{};

  public remainTime:number = 5;

  public timer;

  public sub;

  constructor(private _router:Router, private _userService:UserService) {

  }

  ngOnInit() {
    this.sub = this._userService.getUser().subscribe((user)=> {
      debug(user);
      console.log(user);
      this.user = user;
      if (!isEmpty(user)) {
        this._userService.logout().subscribe();
      }

    });

    this.timer = setInterval(()=> {
      if (!this.remainTime--) {
        clearInterval(this.timer);
        this._router.navigate(['/']);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.sub.unsubscribe();
  }


}
