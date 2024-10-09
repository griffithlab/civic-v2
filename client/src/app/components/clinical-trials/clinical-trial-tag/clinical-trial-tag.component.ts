import { Component, Input, OnInit } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

export interface LinkableClinicalTrial {
  id: number
  nctId: string
  link: string
}

@Component({
  selector: 'cvc-clinical-trial-tag',
  templateUrl: './clinical-trial-tag.component.html',
  styleUrls: ['./clinical-trial-tag.component.less'],
})
export class CvcClinicalTrialTagComponent {
  _clinicalTrial!: LinkableClinicalTrial

  @Input()
  set clinicalTrial(trial: LinkableClinicalTrial) {
    if (!trial) {
      throw new Error(
        'clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.'
      )
    }
    this._clinicalTrial = trial
  }
  get clinicalTrial(): LinkableClinicalTrial {
    return this._clinicalTrial
  }
  @Input() linked?: boolean = true
  @Input() enablePopover?: boolean = true

  constructor() {}
}
