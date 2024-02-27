import { Component, input } from '@angular/core'
import { ActivityFeedItemFragment } from '@app/generated/civic.apollo'
import { CvcCommentActivityDetails } from '../detail-components/comment-activity-details/comment-activity-details.component'
import { CommonModule } from '@angular/common'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@Component({
  selector: 'cvc-activity-feed-item-details',
  standalone: true,
  imports: [CommonModule, CvcPipesModule, CvcCommentActivityDetails],
  templateUrl: './activity-feed-item-details.component.html',
  styleUrl: './activity-feed-item-details.component.less',
})
export class CvcActivityFeedItemDetails {
  cvcActivity = input.required<ActivityFeedItemFragment>()
}
