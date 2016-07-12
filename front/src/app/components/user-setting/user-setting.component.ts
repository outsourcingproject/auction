import {Component} from '@angular/core'
import {User}      from '../../entities/User'
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {TimepickerComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'user-auction',
  styles: [require('./style.styl')],
  template: require('./template.html'),
  directives: [AlertComponent, TimepickerComponent, DATEPICKER_DIRECTIVES]
})
export class UserSettingComponent {
  public date = new Date();
  public time = new Date();
  public user = new User();
}
