import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { JsonPipe } from '@angular/common'
import { SubmitEvidenceItemActivityDetailFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-submit-evidence-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './submit-evidence-activity.component.html',
  styleUrl: './submit-evidence-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSubmitEvidenceActivity {
  activity = input.required<SubmitEvidenceItemActivityDetailFragment>({
    alias: 'cvcSubmitEvidenceActivity',
  })
}
