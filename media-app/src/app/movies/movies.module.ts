import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MaterialModule } from '../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListMoviesComponent,
    UpdateMoviesComponent,
    DeleteMovieComponent
  ],
  imports: [CommonModule, MaterialModule]
})
export class MoviesModule {}
