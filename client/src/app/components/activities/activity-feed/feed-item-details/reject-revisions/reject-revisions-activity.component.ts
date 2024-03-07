import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { RejectRevisionsActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-reject-revisions-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reject-revisions-activity.component.html',
  styleUrl: './reject-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRejectRevisionsActivity {
  activity = input.required<RejectRevisionsActivityDetailFragment>({
    alias: 'cvcRejectRevisionsActivity',
  })
}
