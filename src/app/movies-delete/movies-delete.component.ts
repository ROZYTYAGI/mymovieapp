import { Component, OnInit } from '@angular/core';
import {MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-movies-delete',
  templateUrl: './movies-delete.component.html',
  styleUrls: ['./movies-delete.component.css']
})
export class MoviesDeleteComponent implements OnInit {

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
  }
  

}
