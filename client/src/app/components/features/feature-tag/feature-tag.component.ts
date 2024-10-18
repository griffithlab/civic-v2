import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableFeature {
  id: number
  name: string
  link: string
  flagged: boolean
  deprecated: boolean
}

@Component({
  selector: 'cvc-feature-tag',
  templateUrl: './feature-tag.component.html',
  styleUrl: './feature-tag.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFeatureTagComponent implements OnInit {
  @Input() feature!: LinkableFeature
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true

  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('Gene')
  }

  idFunction(): number {
    return this.feature.id
  }

  ngOnInit() {
    if (this.feature === undefined) {
      throw new Error(
        'cvc-feature-tag requires LinkableFeature input, none supplied.'
      )
    }
  }
}
