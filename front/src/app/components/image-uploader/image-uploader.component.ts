import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {REQUEST_HOST} from "../../app.config";


@Component({
  selector: 'image-uploader',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class ImageUploaderComponent {

  _requestUrl = REQUEST_HOST;

  @Input()
  public label:string ;

  public id = 'image_' + Math.floor(Math.random() * 100000);

  @Output()
  public change = new EventEmitter();
  @Output()
  public complete = new EventEmitter<number>();

  constructor(private _http:Http, private _router:Router) {

  }

  public onChange(event) {
    console.log(event.srcElement.files[0]);
    this.change.emit(event);
    if (event.srcElement.files[0]) {
      let formData = new FormData();
      formData.append('files', event.srcElement.files[0]);
      this._http.post(this._requestUrl + '/rest/image', formData, {withCredentials: true})
        .map((data)=> {
          return data.json().data[0];
        })
        .subscribe(
          (data)=> {
            this.complete.emit(data);
          }
        );
    }
  }
}
