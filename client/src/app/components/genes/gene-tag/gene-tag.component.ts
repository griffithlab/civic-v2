import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableGene {
  id: number
  name: string
  link: string
  flagged?: boolean
}

@Component({
  selector: 'cvc-gene-tag',
  templateUrl: './gene-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcGeneTagComponent extends BaseCloseableTag implements OnInit {
  @Input() gene!: LinkableGene
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  iconColor: string

  constructor() {
    super()
    this.iconColor = getEntityColor('Gene')
  }

  idFunction(): number {
    return this.gene.id
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.gene === undefined) {
      throw new Error(
        'cvc-gene-tag requires LinkableGene input, none supplied.'
      )
    }
  }
}
