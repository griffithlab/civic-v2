import { CommonModule } from '@angular/common'
import { Component, computed, input } from '@angular/core'
import {
  ActivityFeedItemFragment,
  CommentActivityDetailFragment,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-comment-activity-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-activity-details.component.html',
  styleUrl: './comment-activity-details.component.less',
})
export class CvcCommentActivityDetails {
  activity = input.required<CommentActivityDetailFragment>({
    alias: 'cvcCommentActivity',
  })
}
