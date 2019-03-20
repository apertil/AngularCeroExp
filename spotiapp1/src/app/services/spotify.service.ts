import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usarse');

   }

  //  postAutorizacion() {

  //   const url = `https://accounts.spotify.com/api/token`;
  //     // tslint:disable-next-line:align
  //     const cabeceras = new HttpHeaders ({
  //       grant_type: 'client_credentials',
  //       client_id: 'dd353028e04d468ca26808abf490864b',
  //       client_secret: '521d1d5725c3465794fee2003cf1d35c'
  //     });

  //     // tslint:disable-next-line:align
      

  //   return this.http.post(url, { cabeceras });

  //  }

  // getQueryArtist(id: string) {
  //   const url = `https://open.spotify.com/${ id }`;
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer BQDsj3Kh80fJrJVKYCGwBfwbQsBsUs4XDn74gzotYKWaPWH8rVmhmRuXAlroQ_RVnIpEA4QTw0Ejc0R44ak'
  //   });
  // // tslint:disable-next-line:align
  // return this.http.get(url, { headers });

  // }
    getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCC7zZWrBWtkeP6dGBz0H_ncLvhggPiWLU09Rhwci7AX9vrGMUzPTDHjOqt3Idf9dvhGnWJUcGL8LwbBM0'
    });
  // tslint:disable-next-line:align
  console.log (url);
                    // tslint:disable-next-line:align
                    return this.http.get(url, { headers });
  }
   getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
            .pipe(map(data => data['albums'].items));
    // tslint:disable-next-line:no-string-literal
   }
 getArtista(termino: string) {
 return this.getQuery(`search?q=${termino}&type=artist&market=es&limit=10`)
       .pipe( map (data => data['artists'].items));
 }

 getPaginaArtista(id: string) {
  return this.getQuery(`artists/${ id }`);
      // .pipe(map (data => data['artist'].items));
 }
 getTopTracks(id: string) {
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
       // tslint:disable-next-line:no-string-literal
       .pipe(map (data => data['tracks']));

}
}

// const headers = new HttpHeaders({

  //   Authorization: 'Bearer BQC9I3WvyGtb_qyKeFgFIMPFCY0yzo1vWyvrzOwzwiPK8uwcXX79UaqlH2jNyJxgUedTUFZc-YOMcWndzgs'

  // });
