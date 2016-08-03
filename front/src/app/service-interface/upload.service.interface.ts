import {Observable} from "rxjs";

export interface IUploadService{
  makeFileRequest(url:string, files:File[]):Observable<{complate:number,progress?:number,data?:Object}>;
}
