import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {

  }
}
