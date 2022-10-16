import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any): unknown {
    return (value / 79.89).toFixed(2)
  }

}
