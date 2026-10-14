import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { DeprecateComplexMolecularProfileActivityDetailFragment } from './deprecate-mp-activity.query.gql.generated'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-deprecate-mp-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './deprecate-mp-activity.component.html',
  styleUrl: './deprecate-mp-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDeprecateMpActivity {
  activity =
    input.required<DeprecateComplexMolecularProfileActivityDetailFragment>({
      alias: 'cvcDeprecateMpActivity',
    })
}
