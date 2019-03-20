import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  MostrarError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe((data: any) => {console.log (data);
                               this.nuevasCanciones = data;
                               this.loading = false;
                               this.error = false;
    }, ( errorServicio ) => {
      this.error = true;
      this.MostrarError = errorServicio.error.error.message;
      console.log(errorServicio);
   });
  }

    ngOnInit() {
  }
}

