import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ApproveAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-approve-assertion-activity-details',
  imports: [JsonPipe],
  templateUrl: './approve-assertion-activity.component.html',
  styleUrl: './approve-assertion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcApproveAssertionActivity {
  activity = input.required<ApproveAssertionActivityDetailFragment>({
    alias: 'cvcApproveAssertionActivity',
  })
}
