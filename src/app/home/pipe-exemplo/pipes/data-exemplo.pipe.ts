import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataExemplo'
})
export class DataExemploPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
