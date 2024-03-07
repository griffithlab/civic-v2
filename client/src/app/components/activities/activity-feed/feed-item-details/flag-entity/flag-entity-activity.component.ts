import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FlagEntityActivityDetailFragment } from '@app/generated/civic.apollo'

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
}
