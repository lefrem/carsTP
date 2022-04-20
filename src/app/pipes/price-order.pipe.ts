import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'priceOrder'
})
export class PriceOrderPipe implements PipeTransform {

  transform(cars: Car[], order: string): Car[] {

    if (order === 'DESC') {
      return cars.sort((a: Car, b: Car) => b.price - a.price)
    } else {
      return cars.sort((a: Car, b: Car) => a.price - b.price)
    }
  }
}
