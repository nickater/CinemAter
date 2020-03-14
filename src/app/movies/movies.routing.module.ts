import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: 'create', component: CreateMovieComponent },
  { path: 'update', component: UpdateMoviesComponent },
  { path: 'delete', component: DeleteMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
