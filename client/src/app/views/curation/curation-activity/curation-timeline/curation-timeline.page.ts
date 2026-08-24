import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { EventFeedMode } from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-curation-activity-timeline',
  templateUrl: './curation-timeline.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CurationTimelinePage implements OnInit {
  feedMode = EventFeedMode.Unscoped

  constructor() {}

  ngOnInit(): void {}
}
