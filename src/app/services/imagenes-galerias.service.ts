import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesGaleriasService {

  private imagenes: Imagen[] = [
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/1/11/Dragon_ball021.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/1/10/EveryoneInDragonBallZ.jpg',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/e/e6/GTChara2_%28PerfectFiles%29.png',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/be/Tumblr_lyhlnyJolO1qd3uyxo1_500.png',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/85/GohanDebutNV.png',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/8/87/Mouma%28Tori%29.png',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/6/69/Dragon_ball006.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/9/99/Goku_zzzzzzz.jpg',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/8/80/Final_shot.jpg',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/8/8b/Dragon_ball007.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/82/Vegetaunderwater2.jpg',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/5/5f/GokuSSJGT.png',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b3/Dragon_ball002.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/8/8a/KidBuuEvil01.png',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b5/Gtssj2.jpg',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/2/27/Dragon_ball001.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/1/1d/Battle_Cell_Vs_Gohan.jpg',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/6/68/Gogeta_BBK_dbgtepisode60_309.jpg',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/3/30/Dragon_ball003.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/2/20/Dragon_ball_z_3.jpg',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/2/27/Vlcsnap-2017-01-27-01h47m24s433.png',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b3/Dragon_ball004.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/7/7a/DragonBallZ.png',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/4/4d/DragonballGT-Episode064_240.jpg',
    },
    {
      imgdb: 'https://vignette.wikia.nocookie.net/dragonball/images/3/3b/Dragon_ball028.jpg',
      imgdbz: 'https://vignette.wikia.nocookie.net/dragonball/images/d/d1/SSVegito.Ep.270.png',
      imgdbgt: 'https://vignette.wikia.nocookie.net/dragonball/images/d/d9/Hidden_Danger_-_Baby.PNG',
    }
  ];

  constructor() { }

  getImagenes(): Imagen[]{
      return this.imagenes;
  }
}

export interface Imagen {
  imgdb: string;
  imgdbz: string;
  imgdbgt: string;
}

