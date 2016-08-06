import {Component, OnInit,OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UserService} from "../../service/user.service";
import {User} from "../../entities/User";

let debug=require('debug')('ng:logout');

@Component({
  selector: 'logout',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class LogoutComponent implements OnInit,OnDestroy {

  public user:User=<User>{};

  public remainTime:number = 5;

  public timer;
  constructor(private _router:Router, private _userService:UserService) {

  }

  ngOnInit() {
    this._userService.logout().subscribe((user)=>{
      debug(user);
      this.user=user;
    });
    this.timer = setInterval(()=> {
      if (!this.remainTime--) {
        clearInterval(this.timer);
        this._router.navigate(['/']);
      }
    },1000);
  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }


}
