import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getEntityColor } from '@app/core/utilities/get-entity-color';
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo';

export interface LinkableAssertion {
  id: number,
  name: string,
  status?: EvidenceStatus,
  link: string,
}

@Component({
  selector: 'cvc-assertion-tag',
  templateUrl: './assertion-tag.component.html',
  styleUrls: ['./assertion-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAssertionTagComponent {
  _assertion!: LinkableAssertion
  @Input()
  set assertion(eid: LinkableAssertion) {
    if (!eid) { throw new Error('cvc-assertion-tag assertion input requires LinkableAssertion.') }
    this._assertion = eid;
  }
  get assertion(): LinkableAssertion { return this._assertion; }
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  iconColor: string

  constructor() {
    this.iconColor = getEntityColor('Assertion')
  }
}
