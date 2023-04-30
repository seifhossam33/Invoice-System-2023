import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcaseToSpace'
})
export class CamelcaseToSpacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  }

}
