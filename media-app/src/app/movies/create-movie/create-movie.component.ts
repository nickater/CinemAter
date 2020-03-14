import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieDALService } from 'src/app/shared/movie-dal.service';
import { Media } from 'src/app/shared/media';
import { MatDialogRef } from '@angular/material';
import { AddMediaComponent } from 'src/app/add-media/add-media.component';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  createMovieShowForm: FormGroup;
  movie: Media;
  constructor(
    private fb: FormBuilder,
    private movieService: MovieDALService,
    private matDialogRef: MatDialogRef<AddMediaComponent>
  ) {}

  ngOnInit() {
    this.createMovieShowForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['Low', Validators.required]
    });

    this.createMovieShowForm.valueChanges.subscribe((form: Media) => {
      this.movie = {
        type: 'movie',
        name: form.name,
        priority: form.priority,
        dateDownloaded: null,
        downloaded: false
      };
    });
  }

  submit(): void {
    this.movieService.addMovie(this.movie);
    this.matDialogRef.close();
  }
}
