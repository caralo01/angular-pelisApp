import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component:HomeComponent},
	{ path: 'buscar', component:BuscarComponent},
	{ path: 'buscar/:search', component:BuscarComponent},
	{ path: 'pelicula/:id/:page', component: PeliculaComponent},
	{ path: 'pelicula/:id/:page/:busqueda', component:PeliculaComponent},
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });