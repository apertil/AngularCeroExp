import { Component, Input} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';    // En la pagina del artista, es decir donde recibimos la informacion 
                                                  // tenemos que importar la ruta activa.

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  loading: boolean;
  nuevoArtista: any = {};
  copia: any = {};
  topTracks: any[] = [];

  constructor(private rutaActiva: ActivatedRoute,
              private sptser: SpotifyService) {  // Y lo inyectamos en el constructor.
      this.loading = true;
      this.rutaActiva.params.subscribe( params => {
        // tslint:disable-next-line:no-string-literal
        this.getArtista( params['id']);
        // tslint:disable-next-line:no-string-literal
        this.getTopTrackers( params['id']);
      });

  }

  // getArtista( id: string ) {

   
  //   this.spotify.getArtista( id )
  //         .subscribe( artista => {
  //           console.log(artista);
  //           this.artista = artista;

  //           this.loadingArtist = false;
  //         });

  // }
  getArtista(id: string) {

   
    this.sptser.getPaginaArtista( id )
      .subscribe ((artista: any) => {console.log(artista);
       // tslint:disable-next-line:align
       console.log(artista.id);
                                     this.nuevoArtista = artista;
                                     this.loading = false;
      });

  }

   getTopTrackers(id: string)
  {
     this.sptser.getTopTracks(id)
     .subscribe (TopTracks  => {console.log(TopTracks);

                                this.topTracks = TopTracks;
    });
   }
 }




