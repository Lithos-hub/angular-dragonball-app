import { Component, OnInit } from '@angular/core';
import { PeliculasdbService } from '../../services/peliculasdb.service';
import { PeliculasdbzService } from '../../services/peliculasdbz.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  peliculasdb: any[] = [];
  peliculasz: any[] = [];


  constructor(
               // tslint:disable-next-line: variable-name
               public _ps: PeliculasdbzService,
               // tslint:disable-next-line: variable-name
               public _pdbs: PeliculasdbService,
               ) {

              this._ps.getPeliculasZ()
                .subscribe( (data: any) => {
                console.log ( data.parts );
                this.peliculasz = data.parts; });

              this._pdbs.getPeliculasDB()
               .subscribe( (data: any) => {
                console.log( data.parts );
                this.peliculasdb = data.parts; });



  }

  ngOnInit() {
  }

}
