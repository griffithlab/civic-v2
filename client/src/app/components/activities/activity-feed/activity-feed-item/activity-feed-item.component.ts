import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { ActivityFeedNodeFragment } from '@app/generated/civic.apollo'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-activity-feed-item',
  standalone: true,
  imports: [
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    CvcPipesModule,
  ],
  templateUrl: './activity-feed-item.component.html',
  styleUrl: './activity-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItem {
  cvcActivity = input.required<ActivityFeedNodeFragment>()
}
