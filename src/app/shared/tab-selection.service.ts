import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabSelectionService {
  _isMovie: boolean;
  _isTvShow: boolean;
  selectedIndex: number;

  constructor() {}

  toggleTab() {
    this._isMovie = !this._isMovie;
    this._isTvShow = !this._isTvShow;
  }
}
