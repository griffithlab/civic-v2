import { Component, Input, OnInit } from '@angular/core'
import {
  ClinicalTrialPopoverFragment,
  ClinicalTrialPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'cvc-clinical-trial-popover',
    templateUrl: './clinical-trial-popover.component.html',
    styleUrls: ['./clinical-trial-popover.component.less'],
    standalone: false
})
export class CvcClinicalTrialPopoverComponent implements OnInit {
  @Input() clinicalTrialId!: number

  clinicalTrial$?: Observable<Maybe<ClinicalTrialPopoverFragment>>

  constructor(private gql: ClinicalTrialPopoverGQL) {}

  ngOnInit() {
    if (this.clinicalTrialId == undefined) {
      throw new Error(
        'cvc-clinical-trial-popover requires valid clinicalTrialId input.'
      )
    }
    this.clinicalTrial$ = this.gql
      .watch({ clinicalTrialId: this.clinicalTrialId })
      .valueChanges.pipe(
        map(({ data }) => data?.clinicalTrials.edges[0]?.node),
        filter(isNonNulled)
      )
  }
}
