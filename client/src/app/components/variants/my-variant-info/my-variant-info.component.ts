import { Component, Input, OnDestroy } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { MyVariantInfoFieldsFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-my-variant-info',
  templateUrl: './my-variant-info.component.html',
  styleUrls: ['./my-variant-info.component.less'],
})
export class CvcMyVariantInfoComponent {
  @Input() variantInfo: Maybe<MyVariantInfoFieldsFragment>
}
