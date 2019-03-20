import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  })
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor(private _heroesService: HeroesService, private _router: Router ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    }
    // Pertenece a la clase, y se ocupa de navegar
  verHeroe(ind: number) {
    this._router.navigate(['/heroe', ind]);
  }
}
