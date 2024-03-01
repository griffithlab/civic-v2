import { Component, input } from '@angular/core'
import { ActivityFeedItemFragment } from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { activityFeedTypeGuards } from '@app/components/activities/activity-feed/feed-item-details/feed-item-details.types'
import { CvcFlagEntityActivity } from '@app/components/activities/activity-feed/feed-item-details/flag-entity/flag-entity-activity.component'
import { CvcCommentActivity } from './comment/comment-activity.component'

@Component({
  selector: 'cvc-activity-feed-item-details',
  standalone: true,
  imports: [
    CommonModule,
    CvcPipesModule,
    CvcCommentActivity,
    CvcFlagEntityActivity,
  ],
  templateUrl: './feed-item-details.component.html',
  styleUrl: './feed-item-details.component.less',
})
export class CvcActivityFeedItemDetails {
  cvcActivity = input.required<ActivityFeedItemFragment>()
  guards = activityFeedTypeGuards
}
