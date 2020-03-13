import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/angular-material/angular-material.module';
import { AddMediaComponent } from './add-media/add-media.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateTvShowComponent } from './tv-shows/create-tv-show/create-tv-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMediaComponent,
    CreateMovieComponent,
    CreateTvShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AddMediaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
