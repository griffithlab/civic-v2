import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { RevokeEndorsementActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-revoke-endorsement-activity-details',
  imports: [JsonPipe],
  templateUrl: './revoke-endorsement-activity.component.html',
  styleUrl: './revoke-endorsement-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRevokeEndorsementActivity {
  activity = input.required<RevokeEndorsementActivityDetailFragment>({
    alias: 'cvcRevokeEndorsementActivity',
  })
}
