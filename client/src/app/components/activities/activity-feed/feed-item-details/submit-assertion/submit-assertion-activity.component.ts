import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { SubmitAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-submit-assertion-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './submit-assertion-activity.component.html',
  styleUrl: './submit-assertion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSubmitAssertionActivity {
  activity = input.required<SubmitAssertionActivityDetailFragment>({
    alias: 'cvcSubmitAssertionActivity',
  })
}
