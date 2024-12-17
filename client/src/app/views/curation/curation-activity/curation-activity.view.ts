import { Component, OnInit } from '@angular/core'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
  selector: 'cvc-curation-activity-view',
  templateUrl: './curation-activity.view.html',
  styleUrls: ['./curation-activity.view.less'],
  standalone: false,
})
export class CurationActivityView {
  tabs: RouteableTab[]
  constructor() {
    this.tabs = [
      {
        routeName: 'curation-timeline',
        iconName: 'civic-event',
        tabLabel: 'Timeline',
      },
    ]
  }
}
