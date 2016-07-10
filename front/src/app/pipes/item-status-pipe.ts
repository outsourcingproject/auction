import {Pipe} from '@angular/core';

@Pipe({name: "itemStatus"})
export class ItemStatusPipe{
  public transform(input) {
  	let arr=['即将开拍', '拍卖中', '拍卖结束', '流拍'];
    return arr[input];
  }
}

