import {User} from "../entities/User";
import {Observable} from "rxjs";


export interface  IUserService {
  getUser():Observable<Object> ;
  signup(user:User):Observable<Object> ;
  login(user:User):Observable<Object>;
  resetPassword(user:User, pwd:string);
}
