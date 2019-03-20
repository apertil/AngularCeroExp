import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() hero: any = {};
 @Input() indice: number;


 @Output() heroeseleccionado: EventEmitter<number>;


  constructor(private _router: Router) {
      this.heroeseleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe()
    {

      // this.heroeseleccionado.emit(this.indice);
      // console.log(this.indice);
      this._router.navigate(['/heroe', this.indice]);
    }

}
