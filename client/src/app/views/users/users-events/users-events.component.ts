import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import { EventFeedMode } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-users-events',
  templateUrl: './users-events.component.html',
  styleUrls: ['./users-events.component.less'],
})
export class UsersEventsComponent {
  feedScope: ActivityFeedScope

  constructor(private route: ActivatedRoute) {
    this.feedScope = {
      mode: EventFeedMode.User,
      userId: +this.route.snapshot.params['userId'],
    }
  }
}
