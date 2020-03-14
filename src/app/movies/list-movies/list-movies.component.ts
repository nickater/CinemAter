import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/shared/media';
import { MovieDALService } from 'src/app/shared/movie-dal.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies$: Observable<Media[]>;

  constructor(private movieService: MovieDALService) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }
}
