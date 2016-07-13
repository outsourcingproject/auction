import {Pipe} from '@angular/core';

@Pipe({name: "itemStatus"})
export class ItemStatusPipe{
  public transform(input) {
  	let arr=['即将开拍', '正在拍卖', '拍卖结束', '流拍'];
    return arr[input];
  }
}

