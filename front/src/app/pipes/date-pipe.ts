import {Pipe} from '@angular/core';
import moment = require("moment");

moment.locale('zh-cn');
@Pipe({name: "date"})
export class DatePipe {
  public transform(input:any, format:string='YYYY/MM/DD HH:mm', fromNow:string='false'):string {
  	console.log(format);
  	let result:string;
  	if(fromNow==='true'){
		result=moment(input).fromNow(true);
  	}else{
  		result=moment(input).format(format);
  	}
  	return result;
  }
}
