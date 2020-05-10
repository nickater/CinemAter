import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TvShowDALService } from 'src/app/shared/tv-show-dal.service';
import { Media } from 'src/app/shared/media';
import { MatDialogRef, MatRadioChange } from '@angular/material';
import { AddMediaComponent } from 'src/app/add-media/add-media.component';
import { TextingService } from 'src/app/shared/texting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.scss'],
})
export class CreateTvShowComponent implements OnInit {
  createTvShowForm: FormGroup;
  tvShow: Media;
  notify = false;
  isEmail = true;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private tvService: TvShowDALService,
    private matDialogRef: MatDialogRef<AddMediaComponent>,
    private textingService: TextingService
  ) {}

  ngOnInit() {
    this.createTvShowForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['Low', Validators.required],
      notify: [false],
      contact: ['', [Validators.email, Validators.required]],
      carrier: [null],
    });

    this.subscribeToForm();
  }

  submit(): void {
    if (this.createTvShowForm.valid) {
      if (this.notify && !this.isEmail) {
        this.convertNumber();
      }
      console.log(this.tvShow);
      this.tvService.addTvShow(this.tvShow);
      this.matDialogRef.close();
    }
  }

  toggleNotify() {
    this.notify = !this.notify;
  }

  subscribeToForm() {
    this.subscription = this.createTvShowForm.valueChanges.subscribe(
      (form: Media) => {
        this.tvShow = {
          type: 'tv-show',
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
      this.createTvShowForm.removeControl('contact');
      this.createTvShowForm.addControl(
        'contact',
        this.fb.control('', [Validators.email, Validators.required])
      );
    } else {
      this.createTvShowForm.removeControl('contact');
      this.createTvShowForm.addControl(
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
    this.createTvShowForm.patchValue({
      contact: carrierAppendedNumber,
    });
  }

  get contact() {
    return this.createTvShowForm.get('contact').value as string;
  }

  get carrier() {
    return (this.createTvShowForm.get('carrier').value as string) || '';
  }
}
