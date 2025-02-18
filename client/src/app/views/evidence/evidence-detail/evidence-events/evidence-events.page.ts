import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  EventFeedMode,
  SubscribableEntities,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-evidence-events',
  templateUrl: './evidence-events.page.html',
  styleUrls: ['./evidence-events.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class EvidenceEventsPage {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.Subject,
      subject: {
        id: +this.route.snapshot.params['evidenceId'],
        entityType: SubscribableEntities.EvidenceItem,
      },
    }
  }
}
