import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  Signal,
} from '@angular/core'
import { RevokeEndorsementActivityDetailFragment } from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import {
  ScrollerState,
  ScrollerStateService,
} from '../../feed-scroll-service/feed-scroll.service'
import { FEED_SCROLL_SERVICE_TOKEN } from '../../activity-feed.component'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-revoke-endorsement-activity-details',
  imports: [CommonModule, CvcCommentBodyModule, NzTypographyModule],
  templateUrl: './revoke-endorsement-activity.component.html',
  styleUrl: './revoke-endorsement-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRevokeEndorsementActivity {
  activity = input.required<RevokeEndorsementActivityDetailFragment>({
    alias: 'cvcRevokeEndorsementActivity',
  })
  $scroller: Signal<ScrollerState>
  constructor(
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.$scroller = scrollerState.state.asReadonly()
  }
}
