import {Pipe} from '@angular/core';

@Pipe({name: "orderStatus"})
export class OrderStatusPipe{
  public transform(input) {
  	let arr=['待确认', '待付款','待核实', "待发货", "已发货", "已完成",'已取消'];
    return arr[input];
  }
}

