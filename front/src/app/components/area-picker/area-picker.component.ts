import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Address} from "../../entities/address";

let debug = require('debug')('ng:area-picker');
let data = require('./data.json');

@Component({
  selector: 'area-picker',
  template: require('./template.html'),
  styles: [require('./style.styl')]
})
export class AreaPickerComponent {

  public data:Array<{name:string,city:Array<{name:string,area:Array<string>}>}> = data;

  @Input()
  public apModel = new Address(data[0].name, data[0].city[0].name, data[0].city[0].area[0]);

  @Output()
  public apModelChange = new EventEmitter<Address>();

  @Output()
  public addressSubmit= new EventEmitter<Address>();
  
  public currCities:Array<{name:string,area:Array<string>}>;
  public currDistricts:Array<string>;

  constructor() {
    debug(this.apModel);
    this.checkArea('province');
  }

  public checkArea(type:string) {
    debug('checkArea');
    setTimeout(()=>{
      switch (type) {
        case 'province':
          this.currCities = this.data
            .filter((i)=>i.name == this.apModel.province)[0].city;
          this.apModel.city = this.currCities[0].name;
        case 'city':
          this.currDistricts = this.currCities
            .filter((i)=>i.name == this.apModel.city)[0].area;
          this.apModel.district = this.currDistricts[0];
          break;
        default:
          break;

      }
      debug(this.apModel, this.currCities, this.currDistricts);

    },0);
  }
  public onSubmit(){
    this.apModelChange.emit(this.apModel);
    this.addressSubmit.emit(this.apModel);
    debug(this.apModel);
  }
}
