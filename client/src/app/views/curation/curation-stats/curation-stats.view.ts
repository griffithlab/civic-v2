import { Component, OnInit } from '@angular/core';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'cvc-curation-stats-view',
  templateUrl: './curation-stats.view.html',
  styleUrls: ['./curation-stats.view.less']
})
export class CurationStatsView {
  tabs: RouteableTab[];
  constructor() {
    this.tabs = [
      {
        routeName: 'curation-stats',
        iconName: 'line-graph',
        tabLabel: 'Statistics'
      },
    ]
  }

}
