import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DragonBallComponent } from './components/dragon-ball/dragon-ball.component';
import { DragonBallZComponent } from './components/dragon-ball-z/dragon-ball-z.component';
import { DragonBallGTComponent } from './components/dragon-ball-gt/dragon-ball-gt.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TransformacionesComponent } from './components/transformaciones/transformaciones.component';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'personajes', component: PersonajesComponent },
    {path: 'transformaciones', component: TransformacionesComponent },
    {path: 'dragonball', component: DragonBallComponent },
    {path: 'dragonball-z', component: DragonBallZComponent },
    {path: 'dragonball-gt', component: DragonBallGTComponent },
    {path: 'personaje/:id', component: PersonajeComponent },
    {path: 'peliculas', component: PeliculasComponent },
    {path: 'search/:termino', component: SearchComponent },

    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
