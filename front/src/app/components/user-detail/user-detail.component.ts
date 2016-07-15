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

  constructor(private _userService:UserService) {
    this.userDetail = require('./config.json');
    this.user = new User();
    this.user.id = 10;
    this.user.username = 'zl8108812838';
    this.user.desc = '这里是个人描述';

  }

  ngOnInit() {
    // this._userService.getDetail().subscribe((data)=>{
    //    this.data=data;
    //    debug(data);
    // });
  }

}
