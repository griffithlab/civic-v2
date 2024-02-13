import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-activity-feed-counts',
  standalone: true,
  imports: [NzTypographyModule],
  templateUrl: './activity-feed-counts.component.html',
  styleUrl: './activity-feed-counts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedCounts {}
