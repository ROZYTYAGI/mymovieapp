import { Component, OnInit ,Input} from '@angular/core';
import {MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
favourite: any={};
@Input('movieList') movieList:string;
  constructor(private movieSearchService: MovieSearchService) { }
data: any={};
  ngOnInit() {
  }
add(detail:any){
		this.favourite={
			"poster_path": detail.poster_path,
			"title": detail.title,
			"release_date": detail.release_date
		}
		this.movieSearchService.add(this.favourite).subscribe((data)=>{
			this.data=data;
			console.log(data)
		})
	}
}
