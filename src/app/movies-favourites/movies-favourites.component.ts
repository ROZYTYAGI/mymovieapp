import { Component, OnInit } from '@angular/core';
import {MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-movies-favourites',
  templateUrl: './movies-favourites.component.html',
  styleUrls: ['./movies-favourites.component.css']
})
export class MoviesFavouritesComponent implements OnInit {
favouritesAdd: any={};
deletedData: any=[];

  constructor(private movieSearchService:MovieSearchService) { }

  ngOnInit() {
    this.displayMovie();
  }
  displayMovie(){
		this.movieSearchService.displayMovie().subscribe((display)=>{
      
      this.favouritesAdd=display;
      console.log(this.favouritesAdd)
      
		})
	}
  deleteMovie(id:any){
    this.movieSearchService.deleteMovie(id).subscribe(res=>{this.deletedData=res})
      console.log(this.deletedData)
  }

}
