import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/angular-material/angular-material.module';
import { AddMediaComponent } from './add-media/add-media.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateTvShowComponent } from './tv-shows/create-tv-show/create-tv-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListMediaComponent } from './list-media/list-media.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { ListTvShowsComponent } from './tv-shows/list-tv-shows/list-tv-shows.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMediaComponent,
    CreateMovieComponent,
    CreateTvShowComponent,
    ListMediaComponent,
    ListMoviesComponent,
    ListTvShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  entryComponents: [AddMediaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
