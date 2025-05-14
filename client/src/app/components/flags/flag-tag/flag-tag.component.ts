import {
  AfterViewInit,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkableFlag {
  id: number
  name: string
  link: string
}

export interface Subject {
  id: number
  __typename: string
}

@Component({
  selector: 'cvc-flag-tag',
  templateUrl: './flag-tag.component.html',
  standalone: false,
})
export class CvcFlagTagComponent implements AfterViewInit {
  @Input() flag!: LinkableFlag
  @Input() subject?: Subject
  @Input() enablePopover: Boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

  constructor() {}

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
