import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  EventFeedMode,
  SubscribableEntities,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-features-events',
  templateUrl: './features-events.page.html',
  styleUrls: ['./features-events.page.less'],
})
export class FeaturesEventsPage {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.Subject,
      subject: {
        id: +this.route.snapshot.params['featureId'],
        entityType: SubscribableEntities.Feature,
      },
    }
  }
}
