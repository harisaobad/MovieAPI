import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGenres() {
    var header = new HttpHeaders()
      .set("X-RapidAPI-Key", "ee52d9ee21mshfaf07fc59e1d72fp1eaa65jsn6deaf77ade29")
      .set("X-RapidAPI-Host", "moviesdatabase.p.rapidapi.com");

    var options = { headers: header };


    return this.http.get
      ('https://moviesdatabase.p.rapidapi.com/titles/untils/genres',
        options)
  };

  getMovies() {
    var header = new HttpHeaders()
      .set("X-RapidAPI-Key", "ee52d9ee21mshfaf07fc59e1d72fp1eaa65jsn6deaf77ade29")
      .set("X-RapidAPI-Host", "moviesdatabase.p.rapidapi.com");

    var options = { headers: header };


    return this.http.get
      ('https://moviesdatabase.p.rapidapi.com/titles',
        options)
  };
}
