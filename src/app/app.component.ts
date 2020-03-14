import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMediaComponent } from './add-media/add-media.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media-app';

  constructor(private dialog: MatDialog) {}

  openAddMedia() {
    this.dialog.open(AddMediaComponent, {
      height: 'auto',
      width: 'auto'
    });
  }
}
