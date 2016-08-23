import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {REQUEST_HOST} from "../../app.config";

@Component({
  selector: 'image-preview',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class ImagePreviewComponent {

  private _imgId:number;

  public _requireHost = REQUEST_HOST;

  public src:string = "";

  @Input()
  public set imgId(val) {
    this._imgId = val;
    this.src = this._requireHost + '/rest/image/' + val;
    console.log(val);
  }

  public get imgId() {
    return this._imgId;
  }

  constructor(private _http:Http, private _router:Router) {

  }

}
