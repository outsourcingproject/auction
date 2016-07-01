import {Component, Input} from '@angular/core';

@Component({
  selector: 'split',
  styles: [require('./style.styl')],
  template: require('./template.html')
})
export class SplitComponent {
  @Input()
  public cnTitle:string = '专场介绍';

  @Input()
  public enTitle:string = 'SPECIAL INTRODUCTION';

  constructor() {

  }
}
