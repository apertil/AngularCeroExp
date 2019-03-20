import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any [] ): string {

    if ( !images) {
        console.log('la he cagado');
        return './assets/img/noimage.png';
    }
      // tslint:disable-next-line:align
      if (images.length > 0) {
        return images[0].url;
      } else {
        return './assets/img/noimage.png';
      }
    }
  }


