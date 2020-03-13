import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListTvShowsComponent } from './list-tv-shows/list-tv-shows.component';
import { CreateTvShowComponent } from './create-tv-show/create-tv-show.component';
import { UpdateTvShowComponent } from './update-tv-show/update-tv-show.component';
import { DeleteTvShowComponent } from './delete-tv-show/delete-tv-show.component';

const childRoutes: Routes = [
  { path: '', component: ListTvShowsComponent },
  { path: 'create', component: CreateTvShowComponent },
  { path: 'update', component: UpdateTvShowComponent },
  { path: 'delete', component: DeleteTvShowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule {}
