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
  templateUrl: './comment-activity.component.html',
  styleUrl: './comment-activity.component.less',
})
export class CvcCommentActivity {
  activity = input.required<CommentActivityDetailFragment>({
    alias: 'cvcCommentActivity',
  })
}
