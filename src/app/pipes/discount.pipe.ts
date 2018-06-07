import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, offer?: boolean): number {
    if (!offer) return price;
    if (price > 50000)
      return price - price * 0.20;
    if (price > 20000)
      return price - price * 0.10;
    if (price > 10000)
      return price - price * 0.05;
    return price;
  }

}
