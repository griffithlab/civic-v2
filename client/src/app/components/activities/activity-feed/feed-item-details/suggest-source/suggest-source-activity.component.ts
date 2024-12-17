import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { SuggestSourceActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'

@Component({
    selector: 'cvc-suggest-source-activity-details',
    imports: [JsonPipe, NzDescriptionsModule, NzTagModule, CvcEmptyValueModule],
    templateUrl: './suggest-source-activity.component.html',
    styleUrl: './suggest-source-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcSuggestSourceActivity {
  activity = input.required<SuggestSourceActivityDetailFragment>({
    alias: 'cvcSuggestSourceActivity',
  })
}
