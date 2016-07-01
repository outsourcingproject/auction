import {Component} from '@angular/core'
import {SplitComponent} from "../../components/split";
import {RouteParams, RouteConfig} from '@angular/router-deprecated'
import {UserDetailComponent} from "../../components/user-detail";
import {UserNavComponent} from "../../components/user-nav";
import {Todo} from "../../components/todo/index";
import {CustomRouterOutlet} from "../../directives/custom-router-outlet";
import {UserInfoComponent} from "../../components/user-info/user-info.component";
import {UserAuctionComponent} from "../../components/user-auction";
import {UserOrderComponent} from "../../components/user-order";
import {UserSettingComponent} from "../../components/user-setting";

let debug = require('debug')('ng:user-info');

@RouteConfig([
  {path: 'user-info', as: 'UserInfo', component: UserInfoComponent, useAsDefault: true},
  {path: 'auction', as: 'Auction', component: UserAuctionComponent},
  {path: 'order', as: 'Order', component: UserOrderComponent},
  {path: 'message', as: 'Message', component: Todo},
  {path: 'account', as: 'Account', component: UserSettingComponent},
  {path: 'following', as: 'Following', component: Todo},
])
@Component({
  selector: 'user',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [SplitComponent, UserDetailComponent, UserNavComponent,CustomRouterOutlet]
})

export class UserComponent {
  public id:string;

  constructor(private _routeParams:RouteParams) {
    this.id = _routeParams.get('id');
    debug(this.id);
  }
}
