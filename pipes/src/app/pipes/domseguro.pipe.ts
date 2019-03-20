import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ValueTransformer } from '@angular/compiler/src/util';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor (private _domSanitizer: DomSanitizer) {
       }

  transform(value: string, url: string): any {

    // return this._domSanitizer.bypassSecurityTrustUrl( url + value );

    


    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );

    
  }

}
