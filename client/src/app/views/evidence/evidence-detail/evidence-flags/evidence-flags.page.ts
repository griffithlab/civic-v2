import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-evidence-flags',
  templateUrl: './evidence-flags.page.html',
  styleUrls: ['./evidence-flags.page.less'],
  standalone: false,
})
export class EvidenceFlagsPage {
  flaggable: FlaggableInput

  constructor(private route: ActivatedRoute) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId']

    this.flaggable = {
      entityType: FlaggableEntities.EvidenceItem,
      id: evidenceId,
    }
  }
}
