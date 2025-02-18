import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableVariantgroup {
  id: number
  name: string
  link: string
  flagged: boolean
}

@Component({
  selector: 'cvc-variant-group-tag',
  templateUrl: './variant-group-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcVariantGroupTagComponent {
  _variantgroup!: LinkableVariantgroup
  @Input()
  set variantgroup(eid: LinkableVariantgroup) {
    if (!eid) {
      throw new Error(
        'cvc-variantgroup-tag input requires LinkableVariantgroup.'
      )
    }
    this._variantgroup = eid
  }
  get variantgroup(): LinkableVariantgroup {
    return this._variantgroup
  }
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true

  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('VariantGroup')
  }
}
