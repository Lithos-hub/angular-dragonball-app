import { Component, OnInit } from '@angular/core';
import { PeliculasdbService } from '../../services/peliculasdb.service';
import { PeliculasdbzService } from '../../services/peliculasdbz.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {



  peliculasdb: any;
  peliculasz: any;

  constructor(
               // tslint:disable-next-line: variable-name
               public _ps: PeliculasdbzService,
               // tslint:disable-next-line: variable-name
               public _pdbs: PeliculasdbService) {

              this._ps.getPeliculasZ()
                .subscribe( data => {
                console.log ( data );
                this.peliculasz = data; });

              this._pdbs.getPeliculasDB()
               .subscribe( data => {
                console.log( data );
                this.peliculasdb = data; });

  }

  ngOnInit() {
  }

}
