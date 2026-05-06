import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.component'

import { Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkableDisease {
  id: number
  name: string
  link: string
  deprecated: boolean
}

@Component({
  selector: 'cvc-disease-tag',
  templateUrl: './disease-tag.component.html',
  styleUrls: ['./disease-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcDiseaseTagComponent implements AfterViewInit {
  @Input() disease!: LinkableDisease
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean = false
  @Input() linked?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'
  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

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
