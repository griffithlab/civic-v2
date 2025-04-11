import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

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
  standalone: false,
})
export class CvcFeatureTagComponent implements AfterViewInit {
  @Input() feature!: LinkableFeature
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('Gene')
  }

  idFunction(): number {
    return this.feature.id
  }

  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
    }
  }

  ngAfterViewInit() {
    if (this.popoverList.length > 0) {
      this.popover = this.popoverList.first
    }
  }
}
