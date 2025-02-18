import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventFeedMode } from '@app/generated/civic.apollo'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'

@Component({
  selector: 'cvc-organizations-events',
  templateUrl: './organizations-events.component.html',
  styleUrls: ['./organizations-events.component.less'],
  standalone: false,
})
export class OrganizationsEventsComponent {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.Organization,
      organizationId: +this.route.snapshot.params['organizationId'],
    }
  }
}
