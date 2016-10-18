import {Pipe} from '@angular/core';

@Pipe({name: "clip"})
export class ClipPipe {
  public transform(input, clipSize, overflowFill = '...') {
    let str = input.toString().substring(0, clipSize);

    return str == input ? str : str + overflowFill;
  }
}
