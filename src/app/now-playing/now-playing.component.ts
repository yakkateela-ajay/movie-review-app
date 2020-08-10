import { Component, OnInit } from '@angular/core';
import { NowplayingService } from './nowplaying.service';
@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
})
export class NowPlayingComponent implements OnInit {
  data: any;
  image: any;
  constructor(private movieservice: NowplayingService) {}
  ngOnInit() {
    this.movieservice.getPosts().subscribe((result) => {
      this.data = result;
      this.image = this.data.results;
      console.warn('result', result);
    });
  }
}
