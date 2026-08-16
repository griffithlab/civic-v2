import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  Signal,
} from '@angular/core'
import { RevokeApprovalActivityDetailFragment } from './revoke-approval-activity.query.gql.generated'

import {
  ScrollerState,
  ScrollerStateService,
} from '../../feed-scroll-service/feed-scroll.service'
import { FEED_SCROLL_SERVICE_TOKEN } from '../../activity-feed.tokens'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-revoke-approval-activity-details',
  imports: [CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './revoke-approval-activity.component.html',
  styleUrl: './revoke-approval-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRevokeApprovalActivity {
  activity = input.required<RevokeApprovalActivityDetailFragment>({
    alias: 'cvcRevokeApprovalActivity',
  })
  $scroller: Signal<ScrollerState>
  constructor(
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.$scroller = scrollerState.state.asReadonly()
  }
}
