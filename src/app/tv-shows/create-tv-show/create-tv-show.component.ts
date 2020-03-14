import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TvShowDALService } from 'src/app/shared/tv-show-dal.service';
import { Media } from 'src/app/shared/media';
import { MatDialogRef } from '@angular/material';
import { AddMediaComponent } from 'src/app/add-media/add-media.component';

@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.scss']
})
export class CreateTvShowComponent implements OnInit {
  createTvShowForm: FormGroup;
  tvShow: Media;
  constructor(
    private fb: FormBuilder,
    private tvService: TvShowDALService,
    private matDialogRef: MatDialogRef<AddMediaComponent>
  ) {}

  ngOnInit() {
    this.createTvShowForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['Low', Validators.required]
    });

    this.createTvShowForm.valueChanges.subscribe((form: Media) => {
      this.tvShow = {
        type: 'movie',
        name: form.name,
        priority: form.priority,
        dateDownloaded: null,
        downloaded: false
      };
    });
  }

  submit(): void {
    this.tvService.addTvShow(this.tvShow);
    this.matDialogRef.close();
  }
}
