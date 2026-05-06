import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableVariantType {
  id: number
  name: string
  link: string
}

@Component({
    selector: 'cvc-variant-type-tag',
    templateUrl: './variant-type-tag.component.html',
    styleUrls: ['./variant-type-tag.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcVariantTypeTagComponent {
  _variantType!: LinkableVariantType
  @Input()
  set variantType(vt: LinkableVariantType) {
    if (!vt)
      throw new Error(
        'variant-type-tag variantType Input requires LinkableVariantType.'
      )
    this._variantType = vt
  }
  get variantType(): LinkableVariantType {
    return this._variantType
  }

  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true

  idFunction() {
    return this.variantType.id
  }

  iconColor: string
  constructor() {
    this.iconColor = getEntityColor('VariantType')
  }
}
