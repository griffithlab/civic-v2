import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ModerateAssertionActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
    selector: 'cvc-moderate-assertion-activity-details',
    imports: [JsonPipe],
    templateUrl: './moderate-assertion-activity.component.html',
    styleUrl: './moderate-assertion-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcModerateAssertionActivity {
  activity = input.required<ModerateAssertionActivityDetailFragment>({
    alias: 'cvcModerateAssertionActivity',
  })
}
