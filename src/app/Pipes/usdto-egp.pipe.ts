import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, exchangeRate:number = 15 ): number {
    return  value * exchangeRate ;
  }

}
