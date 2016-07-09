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
      {path: '', redirectTo: 'detail'},
      {path: 'detail', component: Todo /*AdminDetailComponent*/},
      {path: 'item', component: Todo /*AdminItemComponent*/},
      {path: 'order', component: Todo /*AdminOrderComponent*/},
      {path: 'message', component: Todo /*AdminMessageComponent*/},
    ]
  },
]
