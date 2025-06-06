import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  EventFeedMode,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-variants-events',
    templateUrl: './variants-events.page.html',
    styleUrls: ['./variants-events.page.less'],
    standalone: false
})
export class VariantsEventsPage {
  // subscribable: SubscribableInput
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId']
    this.feedScope = {
      mode: EventFeedMode.Subject,
      subject: {
        id: variantId,
        entityType: SubscribableEntities.Variant,
      },
    }
  }
}
