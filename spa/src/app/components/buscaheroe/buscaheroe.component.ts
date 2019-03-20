import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-buscaheroe',
  templateUrl: './buscaheroe.component.html',
  styles: []
})
export class BuscaheroeComponent implements OnInit {

  heroe: any[] = [];
  termino: string;

  constructor(private activatedRouter: ActivatedRoute,
    private _heroesService: HeroesService ) {
     }
     ngOnInit() {
      // this.heroe = this._heroesService.buscarHeroes['termino'];
         this.activatedRouter.params.subscribe(params => {
          this.termino = (params['termino']);
          this.heroe = this._heroesService.buscarHeroes(params ['termino']);

          console.log(this.heroe);
      });
    }
}
