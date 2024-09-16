import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ResolveFlagActivityDetailFragment } from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
@Component({
  selector: 'cvc-resolve-flag-activity-details',
  standalone: true,
  imports: [CvcCommentBodyModule],
  templateUrl: './resolve-flag-activity.component.html',
  styleUrl: './resolve-flag-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcResolveFlagActivity {
  activity = input.required<ResolveFlagActivityDetailFragment>({
    alias: 'cvcResolveFlagActivity',
  })
}
