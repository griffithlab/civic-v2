import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ModerateEvidenceItemActivityDetailFragment } from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-moderate-evidence-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './moderate-evidence-activity.component.html',
  styleUrl: './moderate-evidence-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcModerateEvidenceActivity {
  activity = input.required<ModerateEvidenceItemActivityDetailFragment>({
    alias: 'cvcModerateEvidenceActivity',
  })
}
