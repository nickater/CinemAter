import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MovieDALService } from 'src/app/shared/movie-dal.service';
import { Media } from 'src/app/shared/media';
import { MatDialogRef, MatRadioChange } from '@angular/material';
import { AddMediaComponent } from 'src/app/add-media/add-media.component';
import { TextingService } from 'src/app/shared/texting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  createMovieShowForm: FormGroup;
  movie: Media;
  notify = false;
  isEmail = true;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieDALService,
    private matDialogRef: MatDialogRef<AddMediaComponent>,
    private textingService: TextingService
  ) {}

  ngOnInit() {
    this.createMovieShowForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['Low', Validators.required],
      notify: [false],
      contact: ['', [Validators.email, Validators.required]],
      carrier: [null],
    });

    this.subscribeToForm();
  }

  submit(): void {
    if (this.createMovieShowForm.valid) {
      if (this.notify && !this.isEmail) {
        this.convertNumber();
      }
      console.log(this.movie);
      this.movieService.addMovie(this.movie);
      this.matDialogRef.close();
    }
  }

  toggleNotify() {
    this.notify = !this.notify;
  }

  subscribeToForm() {
    this.subscription = this.createMovieShowForm.valueChanges.subscribe(
      (form: Media) => {
        this.movie = {
          type: 'movie',
          name: form.name,
          priority: form.priority,
          dateDownloaded: null,
          downloaded: false,
          notify: this.notify,
          contact: this.contact,
          carrier: this.carrier,
        };
      }
    );
  }

  toggleEmailToText(event: MatRadioChange) {
    this.subscription.unsubscribe();
    console.log(event.value === 'email');
    this.isEmail = event.value === 'email';
    if (this.isEmail) {
      this.createMovieShowForm.removeControl('contact');
      this.createMovieShowForm.addControl(
        'contact',
        this.fb.control('', [Validators.email, Validators.required])
      );
    } else {
      this.createMovieShowForm.removeControl('contact');
      this.createMovieShowForm.addControl(
        'contact',
        this.fb.control('', [
          Validators.maxLength(10),
          Validators.minLength(10),
        ])
      );
    }
    this.subscribeToForm();
  }

  convertNumber() {
    const carrierAppendedNumber = this.textingService.appendSMSGateway(
      this.contact,
      this.carrier
    );
    this.createMovieShowForm.patchValue({
      contact: carrierAppendedNumber,
    });
  }

  get contact() {
    return this.createMovieShowForm.get('contact').value as string;
  }

  get carrier() {
    return (this.createMovieShowForm.get('carrier').value as string) || '';
  }
}
