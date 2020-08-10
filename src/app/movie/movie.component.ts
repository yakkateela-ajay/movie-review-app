import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  data: any;
  image: any;
  constructor(private movieservice: MovieService) {}
  ngOnInit() {
    this.movieservice.getPosts().subscribe((result) => {
      this.data = result;
      this.image = this.data.results;
      console.warn('result', result);
    });
  }
}
