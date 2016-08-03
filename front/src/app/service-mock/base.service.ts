import {Injectable}       from '@angular/core';
import {Http, Response}   from '@angular/http';
import {Observable}       from "rxjs";

@Injectable()
export class BaseService {

  protected _extractData(res: Response):Observable<Object>{
    let body=res.json();
    if(body.errno){
      return Observable.throw(new Error(body.errmsg));
    }
    return Observable.of(body.data);
  }
  
}
