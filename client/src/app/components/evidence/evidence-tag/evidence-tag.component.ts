import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

export interface LinkableEvidence {
  id: number
  name: string
  status: EvidenceStatus
  flagged: boolean
  link: string
}

@Component({
  selector: 'cvc-evidence-tag',
  templateUrl: './evidence-tag.component.html',
  styleUrls: ['./evidence-tag.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceTagComponent implements AfterViewInit {
  _evidence!: LinkableEvidence
  @Input()
  set evidence(eid: LinkableEvidence) {
    if (!eid) {
      throw new Error(
        'cvc-evidence-tag evidence input requires LinkableEvidence.'
      )
    }
    this._evidence = eid
  }
  get evidence(): LinkableEvidence {
    return this._evidence
  }

  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined
  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('EvidenceItem')
  }

  idFunction() {
    return this.evidence.id
  }
  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
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
