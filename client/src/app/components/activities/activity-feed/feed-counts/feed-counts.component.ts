import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { ActivityFeedCounts } from '../activity-feed.types'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'cvc-activity-feed-counts',
  imports: [CommonModule, NzTypographyModule],
  templateUrl: './feed-counts.component.html',
  styleUrl: './feed-counts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedCounts {
  cvcFeedCounts = input<ActivityFeedCounts>()

  total = computed(() => {
    return this.cvcFeedCounts()?.total ?? 0
  })
  unfiltered = computed(() => {
    return this.cvcFeedCounts()?.unfiltered ?? 0
  })
  page = computed(() => {
    return this.cvcFeedCounts()?.page ?? 0
  })
  rows = computed(() => {
    return this.cvcFeedCounts()?.rows ?? 0
  })
}
