import { Component, Input, OnInit } from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo'

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
})
export class CvcEvidenceTagComponent {
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

  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('EvidenceItem')
  }

  idFunction() {
    return this.evidence.id
  }
}
