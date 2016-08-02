import {Pipe} from '@angular/core';

@Pipe({name: "num2str"})
export class Num2strPipe {
  public transform(input:number, arr:Array<string|Object>, startWith:number = 0, name:string = 'name') {
    input -= startWith;
    if (typeof arr[0] === 'string') {
      return arr[input];
    } else {
      return arr[input][name];
    }
  }
}

