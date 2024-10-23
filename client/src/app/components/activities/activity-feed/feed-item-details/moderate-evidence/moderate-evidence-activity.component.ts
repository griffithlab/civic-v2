import { Component, input } from '@angular/core'
import { ModerateEvidenceItemActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-moderate-evidence-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './moderate-evidence-activity.component.html',
  styleUrl: './moderate-evidence-activity.component.less',
})
export class CvcModerateEvidenceActivity {
  activity = input.required<ModerateEvidenceItemActivityDetailFragment>({
    alias: 'cvcModerateEvidenceActivity',
  })
}
