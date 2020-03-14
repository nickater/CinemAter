import { Component, OnInit } from '@angular/core';
import { TabSelectionService } from '../shared/tab-selection.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {
  selectedTabIndex: number;
  constructor(public tabService: TabSelectionService) {}

  ngOnInit() {
    this.selectedTabIndex = this.tabService.selectedIndex;
  }
}
