import {Component, Input, AfterViewInit, EventEmitter, Output, OnDestroy, OnInit} from '@angular/core';

import './ueditor.config.js'
import './ueditor.all.min.js'


let debug=require('debug')('ng:ueditor');
declare var UE:any;

@Component({
  selector: 'ueditor',
  template: require('./ueditor.html'),
  styles: [require('./ueditor.styl')],
})
export class UEditorComponent implements OnDestroy,AfterViewInit {

  private _ue;
  public ueId='ueditor-container-'+parseInt(Math.random()*10000+'');
  private _ueditorReady:boolean=false;
  private _content:string='';

  @Output()
  blur:EventEmitter<string> = new EventEmitter<string>();


  @Input()
  public set defaultContent(val){
    this._content=val;
    if(this._ueditorReady){
      this._ue.setContent(val);
    }
  }

  @Input()
  public height:number=300;

  constructor(){
    debug(this.ueId);
  }

  ngAfterViewInit():any {
    this._ue = UE.getEditor(this.ueId);
    this._ue.addListener('blur', ()=> {
      this.blur.emit(this._ue.getContent())
    });
    this._ue.addListener('ready',()=>{
      this._ueditorReady=true;
      this._ue.setContent(this._content);
      this._ue.setHeight(this.height);
    })
  }

  ngOnDestroy():any {
    // edge destroy ueditor instance may case a run time error
    // if (this._ue)
    //   this._ue.destroy();
  }

}
