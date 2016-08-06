/**
 * index.js.js
 * Created by Huxley on 12/9/15.
 */
import {Component, ContentChildren, QueryList, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../service/user.service";
import {User} from "../../entities/User";
import {isEmpty} from "../../utils";

let debug = require('debug')('ng:masterbar');
let template = require('./template.html');
let style = require('./style.styl');
const menus = require('./config.json');

@Component({
  selector: 'master-bar',
  template: template,
  styles: [style],
  directives: []
})
export class MasterBar implements OnInit {

  public menus = {header: [], main: menus.main};

  constructor(private _router:Router, private _userService:UserService) {

  }

  ngOnInit() {
    this._userService.getUser().subscribe(
      (user:User)=> {
        debug(user);
        try {
          if (isEmpty(user)) {
            this.menus.header = menus.header.filter((i)=> ['登陆', '注册'].includes(i.text))
          }
          switch (user.role) {
            //一般注册用户
            case 2:
            {
              this.menus.header = menus.header.filter((i)=> ['用户中心', '消息', '退出'].includes(i.text));
              break;
            }
            //管理员用户
            case 3:
            {
              this.menus.header = menus.header.filter((i)=> ['用户中心', '消息', '管理', '退出'].includes(i.text));
              break
            }
          }
        } catch (err) {
          console.log(err);
        }
      },
      (err)=> {
        debug(err);
      });
  }

  public search(keyword) {
    debug(`search ${keyword}`);
    if (keyword && keyword.length)
      this._router.navigate(['/search', keyword]);
  }

  public addFavorite() {
    alert("抱歉，您使用的浏览器无法完成此操作。\n\n请使用Ctrl+D进行添加");
  }

}
