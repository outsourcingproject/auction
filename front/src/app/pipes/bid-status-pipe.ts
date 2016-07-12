import {Pipe} from '@angular/core';

@Pipe({name: "bidStatus"})
export class BidStatusPipe{
  public transform(input) {
  	let arr=['得标', '失败', '领先', '被超'];
    return arr[input];
  }
}

