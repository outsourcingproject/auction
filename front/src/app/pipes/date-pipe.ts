import {Pipe} from '@angular/core';
import moment = require("moment");

moment.locale('zh-cn');
@Pipe({name: "date"})
export class DatePipe {

  public result:string;

  public transform(input:any, format:string='YYYY/MM/DD HH:mm'):string {
  	this.result=moment(input).format(format);
  	return this.result;
  }
}
