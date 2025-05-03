import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'

export interface LinkableAssertion {
  id: number
  name: string
  link: string
  status: EvidenceStatus
  flagged: boolean
}

@Component({
  selector: 'cvc-assertion-tag',
  templateUrl: './assertion-tag.component.html',
  styleUrls: ['./assertion-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAssertionTagComponent implements AfterViewInit {
  @Input() assertion!: LinkableAssertion
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true
  @Input() popoverPlacement: PopoverPlacement = 'top'

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('Assertion')
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
