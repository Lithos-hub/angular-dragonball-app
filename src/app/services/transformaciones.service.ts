import { Injectable } from '@angular/core';


@Injectable()
export class TransformacionesService {

    private transformaciones: Transformacion[] = [
        {
          nombre: 'Goku SSJ',
          img: 'assets/img/goku-ssj.png',
          saga: 'Saga Freezer'
        },
        {
          nombre: 'Goku SSJ2',
          img: 'assets/img/goku-ssj2.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Goku SSJ3',
          img: 'assets/img/goku-ssj3.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Goku SSJ4',
          img: 'assets/img/goku-ssj4.png',
          saga: 'Saga GT'
        },
        {
          nombre: 'Vegeta SSJ',
          img: 'assets/img/vegeta-ssj.png',
          saga: 'Saga Androides'
        },
        {
          nombre: 'Vegeta SSJ2',
          img: 'assets/img/vegeta-ssj2.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Vegeta SSJ4',
          img: 'assets/img/vegeta-ssj4.png',
          saga: 'Saga GT'
        },
        {
          nombre: 'Son Gohanda SSJ',
          img: 'assets/img/gohan-child-ssj.png',
          saga: 'Saga Célula'
        },
        {
          nombre: 'Son Gohanda SSJ2',
          img: 'assets/img/gohan-child-ssj2.png',
          saga: 'Saga Célula'
        },
        {
          nombre: 'Trunks SSJ',
          img: 'assets/img/trunks-futuro-ssj.png',
          saga: 'Saga Androides'
        },
        {
          nombre: 'Super Trunks',
          img: 'assets/img/supertrunks.png',
          saga: 'Saga Célula'
        },
        {
          nombre: 'Goten SSJ',
          img: 'assets/img/goten-ssj.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Trunks niño SSJ',
          img: 'assets/img/trunks-kid-ssj.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Gotenks SSJ',
          img: 'assets/img/gotenks-ssj.png',
          saga: 'Saga Boo'
        },
        {
          nombre: 'Gotenks SSJ3',
          img: 'assets/img/gotenks-ssj3.png',
          saga: 'Saga Boo'
        }
      ];

    constructor() {

        console.log('Servicio listo para usarse');
    }

    getTransformaciones(): Transformacion[]{
        return this.transformaciones;
    }

    getTransformacion( idx: string ){
        return this.transformaciones[idx];
    }

    buscarTransformaciones( termino: string ) {
      const transformacionArr: Transformacion[] = [];
      termino = termino.toLowerCase();

      for ( let i = 0; i < this.transformaciones.length; i ++ ){

        const transformacion = this.transformaciones[i];

        const nombre = transformacion.nombre.toLowerCase();
        if (nombre.indexOf( termino ) >= 0 ){
          transformacion.idx = i;
          transformacionArr.push( transformacion );
        }
      }

      return transformacionArr;
    }

}


export interface Transformacion{
    nombre: string;
    img: string;
    saga: string;
    idx?: number;
  }

