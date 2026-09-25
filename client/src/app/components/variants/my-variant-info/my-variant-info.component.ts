import {
  Component,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { MyVariantInfoFieldsFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-my-variant-info',
  templateUrl: './my-variant-info.component.html',
  styleUrls: ['./my-variant-info.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcMyVariantInfoComponent {
  @Input() variantInfo: Maybe<MyVariantInfoFieldsFragment>
}
