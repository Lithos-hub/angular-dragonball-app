import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculadbImagen'
})
export class PeliculadbImagenPipe implements PipeTransform {

  transform(peliculasdb: any): any {

    const url = "https://image.tmdb.org/t/p/w500";

    if ( peliculasdb.parts.backdrop_path) {
      return url + peliculasdb.parts[0].backdrop_path;
    }else {
      if ( peliculasdb.parts.poster_path){
        return url + peliculasdb.parts.poster_path;
      }else{
        return "assets/img/no-image.png";
      }
    }
  }

}
