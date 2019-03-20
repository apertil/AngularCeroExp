import { Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  nuevoArtista: any [] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    }
   buscar(termino: string) {
        // tslint:disable-next-line:align
        this.loading = true;
     this.spotify.getArtista(termino)
        .subscribe((data: any) => {console.log(data);
          // tslint:disable-next-line:align
          this.nuevoArtista = data;
          // tslint:disable-next-line:align
          this.loading = false;
        });
  }


  ngOnInit() {
  }

}
