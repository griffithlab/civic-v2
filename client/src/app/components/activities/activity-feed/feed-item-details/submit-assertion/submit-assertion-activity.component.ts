import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { SubmitAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'
@Component({
  selector: 'cvc-submit-assertion-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './submit-assertion-activity.component.html',
  styleUrl: './submit-assertion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSubmitAssertionActivity {
  activity = input.required<SubmitAssertionActivityDetailFragment>({
    alias: 'cvcSubmitAssertionActivity',
  })
}
