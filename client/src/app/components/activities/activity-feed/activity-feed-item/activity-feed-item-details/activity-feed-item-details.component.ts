import { Component, input } from '@angular/core'
import { ActivityFeedItemFragment } from '@app/generated/civic.apollo'
import { CvcCommentActivityDetails } from '../detail-components/comment-activity-details/comment-activity-details.component'
import { CommonModule } from '@angular/common'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { activityFeedTypeGuards } from '../activity-feed-item.guards'
import { CvcFlagEntityActivityDetails } from '../detail-components/flag-entity-activity-details/flag-entity-activity-details.component'

@Component({
  selector: 'cvc-activity-feed-item-details',
  standalone: true,
  imports: [
    CommonModule,
    CvcPipesModule,
    CvcCommentActivityDetails,
    CvcFlagEntityActivityDetails,
  ],
  templateUrl: './activity-feed-item-details.component.html',
  styleUrl: './activity-feed-item-details.component.less',
})
export class CvcActivityFeedItemDetails {
  cvcActivity = input.required<ActivityFeedItemFragment>()
  guards = activityFeedTypeGuards
}
