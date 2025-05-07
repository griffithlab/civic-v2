import {
  AfterViewInit,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.component'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface TagLinkableOrganization {
  id: number
  name: string
}

@Component({
  selector: 'cvc-organization-tag',
  templateUrl: './organization-tag.component.html',
  styleUrls: ['./organization-tag.component.less'],
  standalone: false,
})
export class CvcOrganizationTagComponent implements AfterViewInit {
  @Input() org!: TagLinkableOrganization
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true
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
