import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ModerateAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-moderate-assertion-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './moderate-assertion-activity.component.html',
  styleUrl: './moderate-assertion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcModerateAssertionActivity {
  activity = input.required<ModerateAssertionActivityDetailFragment>({
    alias: 'cvcModerateAssertionActivity',
  })
}
