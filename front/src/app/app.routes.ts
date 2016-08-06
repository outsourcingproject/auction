import {RouterConfig}          from '@angular/router';
import {Todo} from './components/todo';
import {Home} from './pages/home';
import {Auctioning} from './pages/auctioning';
import {AucItemShown} from './pages/auc-item-shown';
import {ArticleComponent} from './pages/article'
import {LoginForm} from "./components/login-form";
import {SignupForm} from "./components/signup-form";
import {userRoutes} from './pages/user'
import {adminRoutes} from "./pages/admin";
import {AuctionEnd} from "./pages/auction-end";
import {Search} from "./pages/search";
import {DescComponent} from "./pages/desc";
import {LogoutComponent} from "./pages/logout";
import {LoginSuccessComponent} from "./pages/login-success";
import {LoginFailComponent} from "./pages/login-fail/login-fail.component";
import {SignupFailComponent} from "./pages/signup-fail/signup-fail.component";

export const appRoutes:RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'auc-item/:id', component: AucItemShown},
  {path: 'auctioning', component: Auctioning},
  {path: 'auction-end', component: AuctionEnd},
  {path: 'search/:keyword', component: Search},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'login', component: LoginForm},
  {path: 'login-success', component: LoginSuccessComponent},
  {path: 'login-fail', component: LoginFailComponent},
  {path: 'signup', component: SignupForm},
  {path: 'signup-success', component: SignupForm},
  {path: 'signup-fail', component: SignupFailComponent},

  {path: 'logout', component: LogoutComponent},
  {path: 'desc', component: DescComponent},
  ...userRoutes,
  ...adminRoutes,
  {path: 'todo', component: Todo}
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
