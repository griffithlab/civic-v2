import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'
import { Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkableRevision {
  id: number
  name: string
  link: string
  revisionSetId: number
}

export interface Subject {
  id: number
  __typename: string
}

@Component({
  selector: 'cvc-revision-tag',
  templateUrl: './revision-tag.component.html',
  standalone: false,
})
export class CvcRevisionTagComponent implements AfterViewInit {
  @Input() revision!: LinkableRevision
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
