import { Component, OnInit } from '@angular/core'
import { EventFeedMode } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-curation-activity-timeline',
    templateUrl: './curation-timeline.page.html',
    standalone: false
})
export class CurationTimelinePage implements OnInit {
  feedMode = EventFeedMode.Unscoped

  constructor() {}

  ngOnInit(): void {}
}
