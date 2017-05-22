import {Pipe} from '@angular/core';

@Pipe({name: "userCheckStatus"})
export class UserCheckStatus{
  public transform(input) {
  	let arr=['待填写', '待审核', '审核通过'];
    return arr[input];
  }
}

