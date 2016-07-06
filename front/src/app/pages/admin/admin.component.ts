import {Component} from "@angular/core"

@Component({
  selector: 'admin',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class AdminComponent {
  public id:string;

  constructor() {

  }

}
