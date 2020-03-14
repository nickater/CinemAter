import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTvShowComponent } from './update-tv-show/update-tv-show.component';
import { DeleteTvShowComponent } from './delete-tv-show/delete-tv-show.component';
import { MaterialModule } from '../shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateTvShowComponent, DeleteTvShowComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class TvShowsModule {}
