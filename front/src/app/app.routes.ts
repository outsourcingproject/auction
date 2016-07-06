import {RouterConfig}          from '@angular/router';
import {Todo} from './components/todo';
import {Home} from './pages/home';
import {Auctioning} from './pages/auctioning';
import {AucItemShown} from './pages/auc-item-shown';
import {InfoShown} from './pages/info-shown'
import {LoginForm} from "./components/login-form";
import {SignupForm} from "./components/signup-form";
import {userRoutes} from './pages/user'

export const appRoutes:RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'auc-item/:id', component: AucItemShown},
  {path: 'auctioning', component: Auctioning},
  {path: 'info/:id', component: InfoShown},
  {path: 'login', component: LoginForm},
  {path: 'signup', component: SignupForm},
  ...userRoutes,
  {path: 'todo', component: Todo}
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
