import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import {
  RejectRevisionsActivityDetailFragment,
  Revision,
} from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'
import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-reject-revisions-activity-details',
  imports: [JsonPipe, CvcActivityRevision],
  templateUrl: './reject-revisions-activity.component.html',
  styleUrl: './reject-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRejectRevisionsActivity {
  activity = input.required<RejectRevisionsActivityDetailFragment>({
    alias: 'cvcRejectRevisionsActivity',
  })
  // coerce revisions to Revision[] >:(
  // otherwise revision detail components complain about missing fields
  revisions = computed(() => this.activity().revisions as Revision[])
}
