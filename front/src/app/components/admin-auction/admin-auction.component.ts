import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

let data=require('./data.json');

@Component({
  selector:'admin-auction',
  template:require('./template.html'),
  styles:[require('./style.styl')]
})
export class AdminAuctionComponent{

  public data=data;

  constructor(private _http:Http,private _router:Router){

  }

}
