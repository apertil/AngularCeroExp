import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()  items: any [] = [];
  nuevoArtista: any [] = [];
  constructor(private sptser: SpotifyService, private router: Router) { }

  PaginaArtista(id: any) {

    console.log(id);
    let artistaId: any;

    if (id.type === 'artist') {
      artistaId = id.id;
      console.log(artistaId);
    } else {
      artistaId = id.artists[0].id;
      console.log(artistaId);
    }

    this.router.navigate(['/artist', artistaId]); // Gracias as esto navegamos a una página en especial
                                                  // Esto resuelve el problema de pasar datos de una pagina a otra.




      // this.sptser.getPaginaArtista(id)
      // .subscribe ((data: any) => {console.log(id);
      //  // tslint:disable-next-line:align
      //  this.nuevoArtista = data;
      // });
  }

  ngOnInit() {
  }

}
