import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // filter: {id: inputFilter.value, idArmazemOrigem: inputFilter.value, idArmazemDestino: inputFilter.value}
  transform(caminhos: any, filter: any, isAnd: boolean): any {
    if (filter && Array.isArray(caminhos)) {
      let filterKeys = Object.keys(filter);
      if (isAnd) {
        return caminhos.filter(item =>
          filterKeys.reduce((x, keyName) =>
            (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return caminhos.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
    else {
      return caminhos;
    }
  }

}
