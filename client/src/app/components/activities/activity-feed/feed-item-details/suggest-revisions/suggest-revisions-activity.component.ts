import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { SuggestRevisionSetActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-suggest-revision-set-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './suggest-revisions-activity.component.html',
  styleUrl: './suggest-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSuggestRevisionsActivity {
  activity = input.required<SuggestRevisionSetActivityDetailFragment>({
    alias: 'cvcSuggestRevisionSetActivity',
  })
}
