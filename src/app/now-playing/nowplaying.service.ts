import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NowplayingService {
  url =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=bf84d4ad267224315a2541192b84b2e8';

constructor(private http: HttpClient) {}
getPosts() {
  return this.http.get(this.url);
}
}
