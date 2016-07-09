/**
 * index.js
 * Created by Huxley on 12/9/15.
 */
import {Component} from '@angular/core';
import {UEditor} from '../ueditor';
@Component({
  selector: 'todo',
  template: `
  <h1>TODO</h1>

  <ueditor [(ueModel)]="text"></ueditor>
  <div >{{text}}</div>
  `,
  styles: [`h1 { text-align: center; color: #f08f13; }`],
  directives:[UEditor]
})
export class Todo {
	public text:string='init data';
}
