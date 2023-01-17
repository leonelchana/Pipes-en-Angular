import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayuscula: boolean = true): string {
    console.log(enMayuscula, valor);
    return enMayuscula ? valor.toUpperCase() : valor.toLocaleLowerCase();
  }
}
