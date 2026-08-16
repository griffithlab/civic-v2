import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  EventFeedMode,
  SubscribableEntities,
} from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-variant-groups-events',
  templateUrl: './variant-groups-events.page.html',
  styleUrls: ['./variant-groups-events.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantGroupsEventsPage {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.Subject,
      subject: {
        id: +this.route.snapshot.params['variantGroupId'],
        entityType: SubscribableEntities.VariantGroup,
      },
    }
  }
}
