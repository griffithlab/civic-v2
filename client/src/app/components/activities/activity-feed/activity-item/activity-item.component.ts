import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { EventFeedNodeFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-activity-item',
  standalone: true,
  imports: [CommonModule, CvcPipesModule],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityItem {
  @Input() cvcActivityEvent!: EventFeedNodeFragment
}