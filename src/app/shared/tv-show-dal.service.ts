import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class TvShowDALService {
  mediaType = 'tvShows';

  constructor(private afs: AngularFirestore) {}

  getTvShows(): Observable<Media[]> {
    return this.afs
      .collection<Media>(this.mediaType)
      .valueChanges({ idField: 'id' });
  }

  addTvShow(tvShow: Media) {
    this.afs.collection(this.mediaType).add(tvShow);
  }

  deleteTvShow(tvShowId: string) {
    this.afs
      .collection(this.mediaType)
      .doc(tvShowId)
      .delete();
  }
}
