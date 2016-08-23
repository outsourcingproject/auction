import {Pipe} from '@angular/core';

@Pipe({name: "clip"})
export class ClipPipe {
  public transform(input, clipSize, overflowFill = '...') {
    return input.toString().substring(0, clipSize) + overflowFill;
  }
}
