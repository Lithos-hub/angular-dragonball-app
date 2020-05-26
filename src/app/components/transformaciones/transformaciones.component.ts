import { Component, OnInit } from '@angular/core';
import { TransformacionesService, Transformacion } from '../../services/transformaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transformaciones',
  templateUrl: './transformaciones.component.html',
  styles: [
  ]
})
export class TransformacionesComponent implements OnInit {


  transformaciones: Transformacion[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _transformacionesService: TransformacionesService,
               private router: Router) {

  }

ngOnInit() {

  this.transformaciones = this._transformacionesService.getTransformaciones();
}

verTransformacion( idx: number ){
  this.router.navigate( ['/transformacion', idx] );
}

}
