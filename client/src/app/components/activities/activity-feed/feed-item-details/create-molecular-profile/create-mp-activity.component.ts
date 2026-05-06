import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import {
  CreateComplexMolecularProfileActivityDetailFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'cvc-create-mp-activity-details',
    imports: [CommonModule],
    templateUrl: './create-mp-activity.component.html',
    styleUrl: './create-mp-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcCreateMpActivity {
  activity = input.required<
    Maybe<CreateComplexMolecularProfileActivityDetailFragment>
  >({ alias: 'cvcCreateMpActivity' })
}
