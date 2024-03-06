import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import {
  DeprecateComplexMolecularProfileActivity,
  DeprecateComplexMolecularProfileActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-deprecate-mp-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './deprecate-mp-activity.component.html',
  styleUrl: './deprecate-mp-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDeprecateMpActivity {
  activity =
    input.required<DeprecateComplexMolecularProfileActivityDetailFragment>({
      alias: 'cvcDeprecateMpActivity',
    })
}
