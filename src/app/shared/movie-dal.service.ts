import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class MovieDALService {
  mediaType = 'movies';

  constructor(private afs: AngularFirestore) {}

  getMovies(): Observable<Media[]> {
    return this.afs.collection<Media>('movies').valueChanges({ idField: 'id' });
  }

  addMovie(movie: Media) {
    this.afs.collection(this.mediaType).add(movie);
  }

  deleteMovie(movieId: string) {
    this.afs
      .collection(this.mediaType)
      .doc(movieId)
      .delete();
  }
}
