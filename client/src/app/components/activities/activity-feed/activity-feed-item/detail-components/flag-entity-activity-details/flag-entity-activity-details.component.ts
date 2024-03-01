import { CommonModule } from '@angular/common'
import { Component, input } from '@angular/core'
import { FlagEntityActivityDetailFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-flag-entity-activity-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag-entity-activity-details.component.html',
  styleUrl: './flag-entity-activity-details.component.less',
})
export class CvcFlagEntityActivityDetails {
  activity = input.required<FlagEntityActivityDetailFragment>({
    alias: 'cvcFlagEntityActivity',
  })
}
