import {
  Component,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo.types'
import { MyVariantInfoFieldsFragment } from '@app/views/variants/variants-detail/variants-summary/variants-summary.query.gql.generated'

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
