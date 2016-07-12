import {RouterConfig}          from '@angular/router';
import {UserComponent}         from ".";
import {Todo}                  from "../../components/todo/index";
import {UserInfoComponent}     from "../../components/user-info/user-info.component";
import {UserAuctionComponent}  from "../../components/user-auction";
import {UserOrderComponent}    from "../../components/user-order";
import {UserSettingComponent}  from "../../components/user-setting";
import {UserGuard}             from "../../auth/user.guard";
import {UserMessageComponent} from "../../components/user-message";

export const userRoutes:RouterConfig = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserGuard],
    children: [
      {path: '', redirectTo: 'user-info'},
      {path: 'user-info', component: UserInfoComponent},
      {path: 'auction', component: UserAuctionComponent},
      {path: 'order', component: UserOrderComponent},
      {path: 'message', component: UserMessageComponent},
      {path: 'account', component: UserSettingComponent},
      {path: 'following', component: Todo},
    ]
  },
];
