import {Component} from "@angular/core"
import {SplitComponent} from "../../components/split";
import {UserNavComponent} from "../../components/user-nav";

@Component({
  selector: 'admin',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [SplitComponent,UserNavComponent]
})
export class AdminComponent {
  public id:string;
  public navList:Array<{link:Array<any>,text:string}>=require('./nav-config.json');

  constructor() {

  }

}
