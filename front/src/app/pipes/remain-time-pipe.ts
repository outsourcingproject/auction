import {Pipe} from '@angular/core';
import moment = require("moment");

moment.locale('zh-cn');
@Pipe({name: "remainTime",pure:false})
export class RemainTimePipe {


  public transform(input:any):string {
  	console.log('call');
  	let diff = input-new Date().getTime();


  	if(diff<=0){
  		return '无'；
  	};

	diff=Math.floor(diff/1000);
	let hours=Math.floor(diff/(60*60));
	let minutes=Math.floor(diff/60)-hours*60;
	let seconds=diff%60;

  	return `${hours}小时${minutes}分${seconds}秒`;
  }
}
