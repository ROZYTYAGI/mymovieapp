import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MovieSearchService} from './movie-search.service';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFavouritesComponent } from './movies-favourites/movies-favourites.component';
import {MovieRoutingModule} from './movie.routing.module';
import { MoviesDeleteComponent } from './movies-delete/movies-delete.component';
import { MovieRegistrationComponent } from './movie-registration/movie-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesFavouritesComponent,
    MoviesDeleteComponent,
    MovieRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieRoutingModule
  ],
  providers: [MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
