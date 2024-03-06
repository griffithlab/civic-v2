import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { SuggestSourceActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-suggest-source-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './suggest-source-activity.component.html',
  styleUrl: './suggest-source-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSuggestSourceActivity {
  activity = input.required<SuggestSourceActivityDetailFragment>({
    alias: 'cvcSuggestSourceActivity',
  })
}
