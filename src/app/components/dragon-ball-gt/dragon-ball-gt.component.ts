import { Component } from '@angular/core';
import { ImagenesGaleriasService } from '../../services/imagenes-galerias.service';

@Component({
  selector: 'app-dragon-ball-gt',
  templateUrl: './dragon-ball-gt.component.html'
})
export class DragonBallGTComponent{

  msbapAudioUrl  = '../../../assets/audio/dragonballgt.mp3';



  imagenes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _imagenesService: ImagenesGaleriasService){
    this.imagenes = this._imagenesService.getImagenes();
    console.log( this.imagenes );

  }
}
