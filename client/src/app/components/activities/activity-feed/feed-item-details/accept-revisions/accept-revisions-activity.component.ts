import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { AcceptRevisionsActivityDetailFragment } from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'cvc-accept-revisions-activity-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accept-revisions-activity.component.html',
  styleUrl: './accept-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAcceptRevisionsActivity {
  activity = input.required<AcceptRevisionsActivityDetailFragment>({
    alias: 'cvcAcceptRevisionActivity',
  })
}
