import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.scss']
})
export class CreateTvShowComponent implements OnInit {
  createTvShowForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createTvShowForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }
}
