import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

// Rutas

import { APP_ROUTING } from './app.routes';

// Servicios
import { PersonajesService } from './services/personajes.service';
import { PeliculasdbService } from './services/peliculasdb.service';
import { PeliculasdbzService } from './services/peliculasdbz.service';
import { ImagenesGaleriasService } from './services/imagenes-galerias.service';



// Pipes
import { PeliculadbImagenPipe } from './pipes/peliculadb-imagen.pipe';


// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DragonBallComponent } from './components/dragon-ball/dragon-ball.component';
import { DragonBallZComponent } from './components/dragon-ball-z/dragon-ball-z.component';
import { DragonBallGTComponent } from './components/dragon-ball-gt/dragon-ball-gt.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { SearchComponent } from './components/search/search.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonajesComponent,
    DragonBallComponent,
    DragonBallZComponent,
    DragonBallGTComponent,
    PersonajeComponent,
    SearchComponent,
    PersonajeTarjetaComponent,
    PeliculasComponent,
    PeliculadbImagenPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxAudioPlayerModule
  ],
  providers: [ PersonajesService, PeliculasdbzService, PeliculasdbService, ImagenesGaleriasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
