/**
 * index.js
 * Created by Huxley on 12/9/15.
 */
import { Component } from 'angular2/core';
import UEditor from '../ueditor';

@Component({
    selector: 'todo',
    template: '<h1>TODO</h1><UEditor></UEditor>',
    styles: [`h1 { text-align: center; color: #f08f13; }`],
    directives: [UEditor]
})
export default class Todo {
    // null
}
