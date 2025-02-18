import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableVariant {
  id: number
  name: string
  link: string
  flagged: boolean
  deprecated: boolean
}

@Component({
  selector: 'cvc-variant-tag',
  templateUrl: './variant-tag.component.html',
  styleUrls: ['./variant-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcVariantTagComponent implements OnInit {
  @Input() variant!: LinkableVariant
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true

  iconColor: string
  constructor() {
    this.iconColor = getEntityColor('Variant')
  }

  idFunction(): number {
    return this.variant.id
  }

  ngOnInit() {
    if (this.variant === undefined) {
      throw new Error(
        'cvc-variant-tag requires LinkableVariant input, none supplied.'
      )
    }
  }
}
