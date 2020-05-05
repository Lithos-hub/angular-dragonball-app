import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @Input() personaje: any = {};
  @Input() index: number;

  personajes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _personajesService: PersonajesService,
               private router: Router)
                {}

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.personajes = this._personajesService.buscarPersonajes( params.termino );
      console.log( this.personajes );
    });

  }

  verPersonaje() {
    console.log ( this.index );
    this.router.navigate( ['/personaje', this.index] );

}

}
