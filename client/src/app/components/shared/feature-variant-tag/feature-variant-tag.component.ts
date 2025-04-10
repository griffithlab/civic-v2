import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableFeature {
  id: number
  name: string
  link: string
  deprecated: boolean
  flagged: boolean
}

export interface LinkableVariant {
  id: number
  name: string
  link: string
  flagged: boolean
  deprecated: boolean
  feature?: LinkableFeature
}

@Component({
    selector: 'cvc-feature-variant-tag',
    templateUrl: './feature-variant-tag.component.html',
    styleUrls: ['./feature-variant-tag.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFeatureVariantTagComponent implements OnInit {
  @Input() variant!: LinkableVariant
  @Input() feature!: LinkableFeature
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true

  constructor() {}

  ngOnInit() {
    if (this.variant === undefined) {
      throw new Error(
        'cvc-feature-variant-tag requires LinkableVariant input, none supplied.'
      )
    }
    if (this.variant.feature) {
      this.feature = this.variant.feature
    }
    if (this.feature === undefined) {
      throw new Error(
        'cvc-feature-variant-tag requires a Feature, either as an input or on the Variant'
      )
    }
  }
}
