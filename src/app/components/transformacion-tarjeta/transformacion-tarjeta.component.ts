import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transformacion-tarjeta',
  templateUrl: './transformacion-tarjeta.component.html'
})
export class TransformacionTarjetaComponent implements OnInit {

  @Input() transformacion: any = {};
  @Input() index: number;

  @Output() personajeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.personajeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verPersonaje() {
    this.router.navigate( ['/transformaciones', this.index] );


  }

}