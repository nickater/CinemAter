import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListMediaComponent } from './list-media/list-media.component';

const routes: Routes = [
  { path: '', component: ListMediaComponent },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
