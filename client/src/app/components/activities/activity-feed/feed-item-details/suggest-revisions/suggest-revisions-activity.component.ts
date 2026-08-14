import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { RevisionActivityDetailFragment } from '@app/components/activities/activity-feed/activity-feed.fragments.gql.generated'
import { SuggestRevisionSetActivityDetailFragment } from './suggest-revisions-activity.query.gql.generated'
import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-suggest-revision-set-activity-details',
  imports: [CvcActivityRevision],
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
  revisions = computed(
    () => this.activity().revisions as RevisionActivityDetailFragment[]
  )
}
