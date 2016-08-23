import {RouterConfig}          from '@angular/router';
import {AdminComponent}        from ".";
import {Todo}                  from "../../components/todo/index";
import {AdminGuard}            from "../../auth";
import {AdminOrderComponent} from "../../components/admin-order";
import {AdminItemComponent} from "../../components/admin-item";
import {AdminArticleComponent} from "../../components/admin-article";
import {AdminOverviewComponent} from "../../components/admin-overview";
import {AdminAuctionComponent} from "../../components/admin-auction";
import {AdminItemGroupComponent} from "../../components/admin-item-group";


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
      {path: 'auction', component: AdminAuctionComponent},
      {path: 'order', component: AdminOrderComponent},
      {path: 'message', component: Todo /*AdminMessageComponent*/},
      {path: 'user', component: Todo /*AdminUserComponent*/},
    ]
  },
];
