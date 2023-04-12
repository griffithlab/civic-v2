import { Component, Input } from '@angular/core'

export interface statsHash {
  submittedEvidenceItems: number
  acceptedEvidenceItems: number
  submittedAssertions: number
  acceptedAssertions: number
  revisions: number
  appliedRevisions: number
  comments: number
  suggestedSources: number
}

@Component({
  selector: 'cvc-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.less'],
})
export class CvcStatsCardComponent {
  @Input() stats!: statsHash
  @Input() header!: string

  constructor() {}
}
