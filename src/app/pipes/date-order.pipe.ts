import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'dateOrder'
})
export class DateOrderPipe implements PipeTransform {

  transform(cars: Car[], order: string): Car[] {

    if (order === 'DESC') {
      return cars.sort((a: Car, b: Car) => b.id! - a.id!)
    } else {
      return cars.sort((a: Car, b: Car) => a.id! - b.id!)
    }
  }

}
