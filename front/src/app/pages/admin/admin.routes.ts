import {RouterConfig}          from '@angular/router';
import {AdminComponent}        from ".";
import {Todo}                  from "../../components/todo/index";
import {AdminGuard}            from "../../auth";


export const adminRoutes:RouterConfig = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '', redirectTo: 'overview'},
      {path: 'overview', component: Todo /*AdminOverviewComponent*/},
      {path: 'item', component: Todo /*AdminItemComponent*/},
      {path: 'auction', component: Todo /*AdminAuctionComponent*/},
      {path: 'order', component: Todo /*AdminOrderComponent*/},
      {path: 'message', component: Todo /*AdminMessageComponent*/},
      {path: 'user', component: Todo /*AdminUserComponent*/},
    ]
  },
];
