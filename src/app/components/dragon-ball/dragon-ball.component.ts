import { Component } from '@angular/core';
import { ImagenesGaleriasService } from '../../services/imagenes-galerias.service';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html'
})
export class DragonBallComponent {

  msbapAudioUrl  = '../../../assets/audio/dragonball.mp3';
  
  imagenes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _imagenesService: ImagenesGaleriasService){
    this.imagenes = this._imagenesService.getImagenes();
    console.log( this.imagenes );

  }

  ngOnInit(): void {
  }


}



