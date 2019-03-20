import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Alvaro';
  nombre2 = 'alvaRo lopeZ Parrondo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  activar = true;

  PI = Math.PI;
  a = 0.234;
  fecha = new Date();
  salario = 1234.5;
  video = 'U53kkl3pY-E';
  // video = '//www.youtube.com/embed/U53kkl3pY-E';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
      direccion: {
      calle: 'primera',
      casa: '19',
    }
  }

    objetoPromesa = new Promise (  (resolve, reject ) => {
      setTimeout( () => resolve('Llegaron los datos'), 3500);
    });






}
