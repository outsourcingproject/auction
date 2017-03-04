import { Pipe } from '@angular/core';

@Pipe({ name: "num2str" })
export class Num2strPipe {
  public transform(input: number, arr: Array<string | Object>, startWith: number = 0, name: string = 'name') {
    input -= startWith;
    if (typeof arr[0] === 'string') {
      return arr[input];
    } else {
      console.log(input);
      console.log(arr);
      try {
        return arr.filter((i) => i["id"] == input)[0][name];
      } catch (e) {
        return '';
      }
    }
  }
}
