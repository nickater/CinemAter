import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/shared/media';
import { TvShowDALService } from 'src/app/shared/tv-show-dal.service';

@Component({
  selector: 'app-list-tv-shows',
  templateUrl: './list-tv-shows.component.html',
  styleUrls: ['./list-tv-shows.component.scss']
})
export class ListTvShowsComponent implements OnInit {
  tvShows$: Observable<Media[]>;

  constructor(private tvShowService: TvShowDALService) {}

  ngOnInit() {
    this.tvShows$ = this.tvShowService.getTvShows();
  }
}