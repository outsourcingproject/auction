import {Pipe} from '@angular/core';

@Pipe({name: "bool"})
export class BoolPipe {
  public transform(input, _true:string='是', _false:string='否', unsure:string='未知'){
  	return (input == null || input==undefined) ? unsure : input ? _true : _false;
  }
}
