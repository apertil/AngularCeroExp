import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible: boolean): string {
    let salida: string = '';
    const aster: string[] = [];
    if (!visible)  {
        return value;
    } else {
      for (let i = 0; i < value.length; i++ )      {
        salida += '*';
        aster[i] = '*';
      }
      value = aster.join(' ');
       return salida;
    }
  }

}
