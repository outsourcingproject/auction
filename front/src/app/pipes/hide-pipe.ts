import {Pipe} from '@angular/core';

@Pipe({name: "hide"})
export class HidePipe {
  public transform(input, pre=1,post=1,star=6) {
    let strArr=input.split("");

    return [...strArr.slice(0,pre),...[].fill.call(new Array(star),"*"),...strArr.slice(-post)].join("")
  }
}
