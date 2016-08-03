import {Injectable} from 'angular2/core';
import {Observable, Observer} from 'rxjs';
import {IUploadService} from "../service-interface";

@Injectable()
export class UploadService implements IUploadService{

  public makeFileRequest(url:string, files:File[]):Observable<{complate:number,progress?:number,data?:Object}> {
    return Observable.create(observer => {
      let formData:FormData = new FormData(),
        xhr:XMLHttpRequest = new XMLHttpRequest();

      for (let file of files) {
        formData.append("files[]", file, file.name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next({complate:1,progress:100,data:JSON.parse(xhr.response)});
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        observer.next({complate:0,progress:Math.round(event.loaded / event.total * 100)});
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    }).share();
  }
}
