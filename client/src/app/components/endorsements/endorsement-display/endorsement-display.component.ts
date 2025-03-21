import { Component, OnInit, input } from '@angular/core'
import {
  EndorsementListNodeFragment,
  EventFeedMode,
} from '@app/generated/civic.apollo'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import { feedDefaultFilters } from '@app/components/activities/activity-feed/activity-feed.config'
import { ActivityFeedFilters } from '@app/components/activities/activity-feed/activity-feed.types'

@Component({
    selector: 'cvc-endorsement-display',
    templateUrl: './endorsement-display.component.html',
    standalone: false
})
export class CvcEndorsementDisplayComponent implements OnInit {
  endorsement = input.required<EndorsementListNodeFragment>()
  mode = EventFeedMode.Unscoped
  feedFilters?: ActivityFeedFilters

  ngOnInit() {
    if (this.endorsement === undefined) {
      throw new Error('Must pass an endorsement into endorsement display component.')
    }
    this.feedFilters = {
      ...feedDefaultFilters,
      linkedEndorsementId: this.endorsement().id,
      occurredAfter: new Date(this.endorsement().lastReviewed)
    }
  }

  constructor() {
  }
}