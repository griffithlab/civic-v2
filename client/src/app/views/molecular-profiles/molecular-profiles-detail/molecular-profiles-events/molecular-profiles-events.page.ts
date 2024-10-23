import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  EventFeedMode,
  SubscribableEntities,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-molecular-profiles-events',
  templateUrl: './molecular-profiles-events.page.html',
  styleUrls: ['./molecular-profiles-events.page.less'],
})
export class MolecularProfilesEventsPage {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.Subject,
      subject: {
        id: +this.route.snapshot.params['molecularProfileId'],
        entityType: SubscribableEntities.MolecularProfile,
      },
    }
  }
}
