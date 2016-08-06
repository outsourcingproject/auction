import {Injectable}       from '@angular/core';
import {Http, URLSearchParams, Response}             from '@angular/http';
import {Observable}       from "rxjs";
import {User}             from "../entities/user";
import {IAdminService} from "../service-interface";
import {MockBaseService} from "./base.service";

@Injectable()
export class MockAdminService extends MockBaseService implements IAdminService {
  
  constructor(private http:Http) {
    super();
  }
}
