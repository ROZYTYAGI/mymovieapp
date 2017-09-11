import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent }   from './movie-search/movie-search.component';
import { MoviesComponent }      from './movies/movies.component';
import { MoviesFavouritesComponent }  from './movies-favourites/movies-favourites.component';
import  {MoviesListComponent} from './movies-list/movies-list.component';
import  {MoviesDeleteComponent} from './movies-delete/movies-delete.component';
import {MovieRegistrationComponent} from './movie-registration/movie-registration.component';
const routes: Routes = [
  // {path:'',component: MovieSearchComponent},
  { path: 'fav',  component: MoviesFavouritesComponent },
  { path: 'search',  component:MoviesComponent},
  {path: 'del',component: MoviesDeleteComponent},
  {path: 'reg', component:MovieRegistrationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class MovieRoutingModule{}

