import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date, ...args: any[]): any {
    return value.toLocaleString();
  }
}
