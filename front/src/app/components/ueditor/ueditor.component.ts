import {Component, Input, AfterViewInit, EventEmitter, Output, OnDestroy, OnInit} from '@angular/core';

import './ueditor.config.js'
import './ueditor.all.min.js'

declare var UE:any;

@Component({
  selector: 'ueditor',
  template: require('./ueditor.html'),
  styles: [require('./ueditor.styl')]
})
export class UEditor implements OnDestroy,OnInit {


  ue;
  @Output()
  change:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit():any {
    this.ue = UE.getEditor('ueditor-container');
    this.ue.addListener('selectionchange', ()=> {
      this.change.emit(this.ue.getContent())
    })
  }

  ngOnDestroy():any {
    if (this.ue)
      this.ue.destroy();
  }

}
