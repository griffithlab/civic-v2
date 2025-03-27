import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.component'
import { Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

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
export class CvcVariantGroupTagComponent implements AfterViewInit {
  @Input() variantgroup!: LinkableVariantgroup
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'
  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('VariantGroup')
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
