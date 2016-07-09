import {Component} from "@angular/core"
import {SplitComponent} from "../../components/split";

@Component({
  selector: 'admin',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [SplitComponent]
})
export class AdminComponent {
  public id:string;

  constructor() {

  }

}
