import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '@angular/compiler';

@Pipe ({
    name : 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

   transform(value: string, args1, args2, args3, args4): string {
    console.log(value);
    console.log(args1);
    console.log(args2);
    console.log(args3);
    return 'Hola Mundo!';
    }
}






