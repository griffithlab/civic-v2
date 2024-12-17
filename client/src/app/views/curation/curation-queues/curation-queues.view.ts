import { Component, OnInit } from '@angular/core'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
  selector: 'cvc-curation-queues-view',
  templateUrl: './curation-queues.view.html',
  styleUrls: ['./curation-queues.view.less'],
  standalone: false,
})
export class CurationQueuesView {
  tabs: RouteableTab[]
  constructor() {
    this.tabs = [
      {
        routeName: 'pending-sources',
        iconName: 'civic-source',
        tabLabel: 'Sources Queue',
      },
      {
        routeName: 'pending-evidence',
        iconName: 'civic-evidence',
        tabLabel: 'Evidence Queue',
      },
      {
        routeName: 'pending-assertions',
        iconName: 'civic-assertion',
        tabLabel: 'Assertions Queue',
      },
    ]
  }
}
