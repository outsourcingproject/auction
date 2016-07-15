import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {SplitComponent} from "../../components/split";
import {Observable} from "rxjs/Observable";

let data = require('./data.json');

@Component({
  selector: 'desc',
  template: require('./template.html'),
  styles: [require('./style.styl')],
  directives: [SplitComponent]
})
export class DescComponent {

  public data = {};

  constructor(private _http:Http, private _router:Router) {

  }

  ngOnInit() {
    Observable.of(data).delay(500).subscribe((data)=> {
      this.data = data;
    })

  }
}
