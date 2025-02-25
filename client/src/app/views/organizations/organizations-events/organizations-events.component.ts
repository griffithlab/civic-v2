import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventFeedMode } from '@app/generated/civic.apollo'
import {
  ActivityFeedScope,
  ActivityFeedSettings,
} from '@app/components/activities/activity-feed/activity-feed.types'
import { feedDefaultSettings } from '@app/components/activities/activity-feed/activity-feed.config'

@Component({
  selector: 'cvc-organizations-events',
  templateUrl: './organizations-events.component.html',
  styleUrls: ['./organizations-events.component.less'],
})
export class OrganizationsEventsComponent {
  feedScope: ActivityFeedScope
  feedSettings: ActivityFeedSettings

  constructor(private route: ActivatedRoute) {
    this.feedSettings = {
      ...feedDefaultSettings,
      showOrganization: false,
    }
    this.feedScope = {
      mode: EventFeedMode.Organization,
      organizationId: +this.route.snapshot.params['organizationId'],
    }
  }
}
