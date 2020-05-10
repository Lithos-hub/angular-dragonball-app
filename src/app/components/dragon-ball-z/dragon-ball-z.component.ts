import { Component } from '@angular/core';
import { ImagenesGaleriasService } from '../../services/imagenes-galerias.service';

@Component({
  selector: 'app-dragon-ball-z',
  templateUrl: './dragon-ball-z.component.html'
})
export class DragonBallZComponent{

  msbapAudioUrl  = '../../../assets/audio/dragonballz.mp3';

  imagenes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _imagenesService: ImagenesGaleriasService){
    this.imagenes = this._imagenesService.getImagenes();
    console.log( this.imagenes );

  }
}
