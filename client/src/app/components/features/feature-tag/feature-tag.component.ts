import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableFeature {
  id: number
  name: string
  link: string
  flagged?: boolean
  deprecated?: boolean
}

@Component({
  selector: 'cvc-feature-tag',
  templateUrl: './feature-tag.component.html',
  styleUrl: './feature-tag.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFeatureTagComponent extends BaseCloseableTag implements OnInit {
  @Input() feature!: LinkableFeature
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  iconColor: string

  constructor() {
    super()
    this.iconColor = getEntityColor('Gene')
  }

  idFunction(): number {
    return this.feature.id
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.feature === undefined) {
      throw new Error(
        'cvc-feature-tag requires LinkableFeature input, none supplied.'
      )
    }
  }
}
