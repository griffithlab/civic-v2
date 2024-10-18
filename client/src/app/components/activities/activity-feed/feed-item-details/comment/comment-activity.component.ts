import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CommentActivityDetailFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-comment-activity-details',
  standalone: true,
  imports: [CommonModule, CvcCommentBodyModule],
  templateUrl: './comment-activity.component.html',
  styleUrl: './comment-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcCommentActivity {
  activity = input.required<CommentActivityDetailFragment>({
    alias: 'cvcCommentActivity',
  })
}
