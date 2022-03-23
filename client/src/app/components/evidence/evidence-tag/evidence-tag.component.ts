import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo';

export interface LinkableEvidence {
  id: number,
  name: string,
  status?: EvidenceStatus,
  link: string,
}

@Component({
  selector: 'cvc-evidence-tag',
  templateUrl: './evidence-tag.component.html',
  styleUrls: ['./evidence-tag.component.less']
})
export class CvcEvidenceTagComponent extends BaseCloseableTag implements OnInit {
  @Input() evidence!: LinkableEvidence
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { super(); }

  idFunction() {
    return this.evidence.id
  }

  ngOnInit() {
    if (this.evidence === undefined) {
      throw new Error('cvc-evidence-tag requires LinkableEvidence input, none supplied.')
    }
  }

}
