import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CommentActivityDetailFragment } from './comment-activity.query.gql.generated'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-comment-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './comment-activity.component.html',
  styleUrl: './comment-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcCommentActivity {
  activity = input.required<CommentActivityDetailFragment>({
    alias: 'cvcCommentActivity',
  })
}
