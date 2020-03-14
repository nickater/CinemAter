import { Component, OnInit } from '@angular/core';
import { TabSelectionService } from '../shared/tab-selection.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  constructor(private tabService: TabSelectionService) {}

  ngOnInit(): void {}

  toggleIndex(event) {
    this.tabService.selectedIndex = event;
  }
}
