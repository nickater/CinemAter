import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MaterialModule } from '../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [UpdateMoviesComponent, DeleteMovieComponent],
  imports: [CommonModule, MaterialModule]
})
export class MoviesModule {}
