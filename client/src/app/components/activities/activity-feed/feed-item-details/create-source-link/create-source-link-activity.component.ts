import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CreateSourceLinkActivityDetailFragment } from '@app/generated/civic.apollo'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-create-source-link-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './create-source-link-activity.component.html',
  styleUrl: './create-source-link-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcCreateSourceLinkActivity {
  activity = input.required<CreateSourceLinkActivityDetailFragment>({
    alias: 'cvcCreateSourceLinkActivity',
  })
}
