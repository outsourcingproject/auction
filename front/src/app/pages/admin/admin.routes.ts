import {RouterConfig}          from '@angular/router';
import {AdminComponent}        from ".";
import {Todo}                  from "../../components/todo/index";
import {AdminGuard}            from "../../auth";
import {AdminOrderComponent} from "../../components/admin-order";
import {AdminItemComponent} from "../../components/admin-item";
import {AdminArticleComponent} from "../../components/admin-article";
import {AdminOverviewComponent} from "../../components/admin-overview";
import {AdminItemGroupComponent} from "../../components/admin-item-group";
import {AdminMessageComponent} from "../../components/admin-message"
import {AdminUserComponent} from "../../components/admin-user";

export const adminRoutes:RouterConfig = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '', redirectTo: 'overview'},
      {path: 'overview', component: AdminOverviewComponent},
      {path: 'article', component: AdminArticleComponent},
      {path: 'item', component: AdminItemComponent},
      {path: 'item-group', component: AdminItemGroupComponent},
      {path: 'order', component: AdminOrderComponent},
      {path: 'message', component: AdminMessageComponent},
      {path: 'user', component: AdminUserComponent /*AdminUserComponent*/},
    ]
  },
];
