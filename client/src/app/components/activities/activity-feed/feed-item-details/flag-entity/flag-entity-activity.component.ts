import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  Signal,
} from '@angular/core'
import { FlagEntityActivityDetailFragment } from '@app/generated/civic.apollo'
import { FEED_SCROLL_SERVICE_TOKEN } from '@app/components/activities/activity-feed/activity-feed.component'
import {
  ScrollerState,
  ScrollerStateService,
} from '@app/components/activities/activity-feed/feed-scroll-service/feed-scroll.service'

@Component({
  selector: 'cvc-flag-entity-activity-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag-entity-activity.component.html',
  styleUrl: './flag-entity-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFlagEntityActivity {
  activity = input.required<FlagEntityActivityDetailFragment>({
    alias: 'cvcFlagEntityActivity',
  })

  $scroller: Signal<ScrollerState>
  constructor(
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.$scroller = scrollerState.state.asReadonly()
  }
}
