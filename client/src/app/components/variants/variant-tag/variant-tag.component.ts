import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base'
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
})
export class CvcVariantTagComponent extends BaseCloseableTag implements OnInit {
  @Input() variant!: LinkableVariant
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  iconColor: string
  constructor() {
    super()
    this.iconColor = getEntityColor('Variant')
  }

  idFunction(): number {
    return this.variant.id
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.variant === undefined) {
      throw new Error(
        'cvc-variant-tag requires LinkableVariant input, none supplied.'
      )
    }
  }
}
