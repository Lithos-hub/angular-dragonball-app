import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
  ]
})
export class PersonajeComponent{

  personaje: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _personajesService: PersonajesService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.personaje = this._personajesService.getPersonaje( params.id );

    });

  }


}
