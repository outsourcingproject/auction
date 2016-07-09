import {Injectable}       from '@angular/core';
import {Http, URLSearchParams,Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/User";
import {BaseService} from "./base.service";

@Injectable()
export class AdminService extends BaseService{
  
  constructor(private http:Http){
  	super();
  }
}
