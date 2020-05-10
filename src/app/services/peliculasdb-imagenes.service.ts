// SERVICIO DE IMÁGENES DE PELÍCULAS DE DRAGON BALL

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeliculasdbImagenesService {

  private apikey: string = "c9a3e87b703c630c13d5ea61ef62c7b6";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getImagenesPeliculasdb(){

    const url = `${ this.urlMoviedb }/collection/386410/images?&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );

  }


}
