import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
@Output() movieList = new EventEmitter<any>();
		movies: any={};
  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
  }
searchMovie(movie): any{
 return this.movieService.search(movie)
 .subscribe((data)=>
{
 	this.movies=data.results;
 	this.movieList.emit(this.movies);
 		console.log(this.movies)
})
}
}