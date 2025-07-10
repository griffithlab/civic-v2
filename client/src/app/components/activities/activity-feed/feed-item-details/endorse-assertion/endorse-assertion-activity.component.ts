import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { EndorseAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-endorse-assertion-activity-details',
  imports: [JsonPipe],
  templateUrl: './endorse-assertion-activity.component.html',
  styleUrl: './endorse-assertion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEndorseAssertionActivity {
  activity = input.required<EndorseAssertionActivityDetailFragment>({
    alias: 'cvcEndorseAssertionActivity',
  })
}
