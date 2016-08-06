import {User} from "../entities/User";
import {Observable} from "rxjs";


export interface  IUserService {
  getUser():Observable<User> ;
  signup(user:User):Observable<User> ;
  login(user:User):Observable<User>;
  logout():Observable<User>;
  resetPassword(user:User);
}
