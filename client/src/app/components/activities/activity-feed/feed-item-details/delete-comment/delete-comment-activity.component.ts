import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { DeleteCommentActivityDetailFragment } from '@app/generated/civic.apollo'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
    selector: 'cvc-delete-comment-activity-details',
    imports: [CommonModule, CvcCommentBodyModule, NzTypographyModule],
    templateUrl: './delete-comment-activity.component.html',
    styleUrl: './delete-comment-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcDeleteCommentActivity {
  activity = input.required<DeleteCommentActivityDetailFragment>({
    alias: 'cvcDeleteCommentActivity',
  })
}
