import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { getEntityColor } from '@app/core/utilities/get-entity-color';
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo';

export interface LinkableEvidence {
  id: number,
  name: string,
  status?: EvidenceStatus,
  flagged?: boolean,
  link: string,
}

@Component({
  selector: 'cvc-evidence-tag',
  templateUrl: './evidence-tag.component.html',
  styleUrls: ['./evidence-tag.component.less']
})
export class CvcEvidenceTagComponent extends BaseCloseableTag implements OnInit {
  _evidence!: LinkableEvidence;
  @Input()
  set evidence(eid: LinkableEvidence) {
    if (!eid) { throw new Error('cvc-evidence-tag evidence input requires LinkableEvidence.') }
    this._evidence = eid;
  }
  get evidence(): LinkableEvidence { return this._evidence; }

  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  iconColor: string

  constructor() {
    super()
    this.iconColor = getEntityColor('EvidenceItem')
  }

  idFunction() {
    return this.evidence.id
  }
}
