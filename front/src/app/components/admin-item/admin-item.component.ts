import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

let data=require('./data.json');

@Component({
  selector:'admin-item',
  template:require('./template.html'),
  styles:[require('./style.styl')]
})
export class AdminItemComponent{

  public data=data;

  constructor(private _http:Http,private _router:Router){

  }

}
