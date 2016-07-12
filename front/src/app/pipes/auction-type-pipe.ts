import {Pipe} from '@angular/core';

@Pipe({name: "auctionType"})
export class AuctionTypePipe{
  public transform(input) {
  	let arr=['时间领先', '固定时间'];
    return arr[input];
  }
}

