import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from '@rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usarse');
   }

getNewReleases() {

 const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBH05c1Ze2KFWlc6QPNqoTFzaKgjTy1nRQdjDZylj9Usrrse0OZYp3SuqY5LDrgnHAkAZbz7mp9Tm2WhKs'

  });
return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
       .pipe( map (data => {
         return data['albums'].items;
       }));
}

getArtista(termino: string ) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBH05c1Ze2KFWlc6QPNqoTFzaKgjTy1nRQdjDZylj9Usrrse0OZYp3SuqY5LDrgnHAkAZbz7mp9Tm2WhKs'
  });
  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=es&limit=10`, { headers });

}

}
