import {Injectable}       from '@angular/core';
import {Http, URLSearchParams,Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {BaseService} from "./base.service";
import {IAuctionService} from "../service-interface";

@Injectable()
export class AuctionService extends BaseService implements IAuctionService{

  constructor(private http:Http){
  	super();
  }
}
