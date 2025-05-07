import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ResolveFlagActivityDetailFragment } from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
    selector: 'cvc-resolve-flag-activity-details',
    imports: [CvcCommentBodyModule, NzTypographyModule],
    templateUrl: './resolve-flag-activity.component.html',
    styleUrl: './resolve-flag-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcResolveFlagActivity {
  activity = input.required<ResolveFlagActivityDetailFragment>({
    alias: 'cvcResolveFlagActivity',
  })
}
