import {Component, Input, OnInit} from '@angular/core'
import {UserService} from "../../service";
import {User} from '../../entities/user';

let debug = require('debug')('ng:user-detail');

@Component({
  selector: 'user-detail',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class UserDetailComponent implements OnInit {

  userDetail:Object;
  user:User;
  constructor(private _userService:UserService){
    this.userDetail=require('./config.json');
    this.user={
      username:'zl8108812838',
      desc:'nihao'
    };
    
  }

  ngOnInit() {
    // this._userService.getDetail().subscribe((data)=>{
    //    this.data=data;
    //    debug(data);
    // });
  }

}
