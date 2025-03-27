import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-molecular-profiles-flags',
    templateUrl: './molecular-profiles-flags.page.html',
    styleUrls: ['./molecular-profiles-flags.page.less'],
    standalone: false
})
export class MolecularProfilesFlagsPage {
  flaggable: FlaggableInput

  constructor(private route: ActivatedRoute) {
    const mpId: number = +this.route.snapshot.params['molecularProfileId']

    this.flaggable = {
      entityType: FlaggableEntities.MolecularProfile,
      id: mpId,
    }
  }
}
