import {Pipe} from '@angular/core';

@Pipe({name: "orderStatus"})
export class OrderStatusPipe{
  public transform(input) {
  	let arr=['待确认', '待付款', "待发货", "已发货", "已完成"];
    return arr[input];
  }
}

