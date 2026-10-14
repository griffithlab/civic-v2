import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { SubmitEvidenceItemActivityDetailFragment } from './submit-evidence-activity.query.gql.generated'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-submit-evidence-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './submit-evidence-activity.component.html',
  styleUrl: './submit-evidence-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSubmitEvidenceActivity {
  activity = input.required<SubmitEvidenceItemActivityDetailFragment>({
    alias: 'cvcSubmitEvidenceActivity',
  })
}
