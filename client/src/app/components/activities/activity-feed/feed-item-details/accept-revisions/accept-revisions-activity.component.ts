import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import {
  AcceptRevisionsActivityDetailFragment,
  Revision,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-accept-revisions-activity-details',
  standalone: true,
  imports: [CommonModule, CvcActivityRevision],
  templateUrl: './accept-revisions-activity.component.html',
  styleUrl: './accept-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAcceptRevisionsActivity {
  activity = input.required<AcceptRevisionsActivityDetailFragment>({
    alias: 'cvcAcceptRevisionActivity',
  })
  // coerce revisions to Revision[] >:(
  // otherwise revision detail components complain about missing fields
  revisions = computed(() => this.activity().revisions as Revision[])
}
