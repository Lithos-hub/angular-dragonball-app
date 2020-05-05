import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje } from '../../services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent implements OnInit {


  personajes: Personaje[] = [];

  constructor( private _personajesService: PersonajesService,
               private router: Router) {

  }

ngOnInit() {

  this.personajes = this._personajesService.getPersonajes();
}

verPersonaje( idx: number ){
  this.router.navigate( ['/personaje', idx] );
}

}

