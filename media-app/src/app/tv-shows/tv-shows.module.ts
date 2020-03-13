import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTvShowComponent } from './create-tv-show/create-tv-show.component';
import { ListTvShowsComponent } from './list-tv-shows/list-tv-shows.component';
import { UpdateTvShowComponent } from './update-tv-show/update-tv-show.component';
import { DeleteTvShowComponent } from './delete-tv-show/delete-tv-show.component';
import { MaterialModule } from '../shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateTvShowComponent,
    ListTvShowsComponent,
    UpdateTvShowComponent,
    DeleteTvShowComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class TvShowsModule {}
