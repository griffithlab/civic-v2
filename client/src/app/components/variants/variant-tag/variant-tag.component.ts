import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  signal,
  WritableSignal,
  ViewChildren,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

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
export class CvcVariantTagComponent implements AfterViewInit {
  @Input() variant!: LinkableVariant
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string
  loading: WritableSignal<boolean> = signal(true)

  constructor() {
    this.iconColor = getEntityColor('Variant')
  }

  idFunction(): number {
    return this.variant.id
  }

  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
      this.loading.set(false)
    }
  }

  ngAfterViewInit() {
    if (this.popoverList.length > 0) {
      this.popover = this.popoverList.first
    } else {
      console.warn('cvc-variant-tag: no NzPopoverDirective found in view')
    }
  }
}
