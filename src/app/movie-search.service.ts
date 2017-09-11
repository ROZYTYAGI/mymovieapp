import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieSearchService {
private movieUrl = 'http://api.themoviedb.org/3/search/movie?api_key=f11437f316f8d4bcdea4213f4617181d&query=';  // URL to web api
  constructor(private http: Http) { }

  search(movie:string): any{
 return this.http.get(this.movieUrl+movie)
    .map((res: Response)=>res.json())
    .catch(this.handleError)
   
   }
  handleError(err: any) {
        console.log("error occured",err);  // debug
        if(err instanceof Response) {
          return Observable.throw(alert(JSON.stringify(err.json())||'error occured'));
         
        }
}
add(fav){
  console.log(fav)
  return this.http.post('http://localhost:3000/user',fav)
  .map(res=>res.json());
}

displayMovie(){
  return this.http.get('http://localhost:3000/user')
  .map(res=>res.json());
}

deleteMovie(id:any){
  return this.http.delete('http://localhost:3000/user/'+id._id)
  .map(res=>res.json());
}
}
