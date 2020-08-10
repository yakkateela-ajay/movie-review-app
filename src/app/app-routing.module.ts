import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
  },
  {
    path: 'now-playing',
    component: NowPlayingComponent,
  },
  {
    path: 'movies',
    component: MovieComponent,
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
