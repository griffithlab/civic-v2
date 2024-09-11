import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import {
  Revision,
  SuggestRevisionSetActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'
import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-suggest-revision-set-activity-details',
  standalone: true,
  imports: [JsonPipe, CvcActivityRevision],
  templateUrl: './suggest-revisions-activity.component.html',
  styleUrl: './suggest-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSuggestRevisionsActivity {
  activity = input.required<SuggestRevisionSetActivityDetailFragment>({
    alias: 'cvcSuggestRevisionSetActivity',
  })

  // coerce revisions to Revision[] >:(
  // otherwise revision detail components complain about missing fields
  revisions = computed(() => this.activity().revisions as Revision[])
}
