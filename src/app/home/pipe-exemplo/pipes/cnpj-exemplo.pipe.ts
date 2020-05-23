import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjCustom'
})
export class CnpjExemploPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown {

    let contentFormmated = value;
    if (value.length === 14) {
        contentFormmated = value.substr(0, 2) + '.' +
            value.substr(2, 3) + '.' +
            value.substr(5, 3) + '/' +
            value.substr(8, 4) + '-' +
            value.substr(12, 2);
    }
    return contentFormmated;
    
  }

}
