import {Component} from "@angular/core"
import {RouteParams} from '@angular/router-deprecated'

@Component({
  selector: 'admin',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class AdminComponent {
  public id:string;

  constructor(private _routeParams:RouteParams) {
    this.id = _routeParams.get('id');

  }

}
