import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculadbImagen'
})
export class PeliculadbImagenPipe implements PipeTransform {

  transform( pelicula: any): any {

    let url = 'https://image.tmdb.org/t/p/w500';

    if ( pelicula.poster_path ){
      return url + pelicula.poster_path;
    }else{
      if ( pelicula.backdrop_path ){
        return url + pelicula.backdrop_path;
      }
    }

    }
  }

