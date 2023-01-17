import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ClinicalTrialsRoutingModule } from './clinical-trials-routing.module'
import { ClinicalTrialsComponent } from './clinical-trials.component'
import { ClinicalTrialsHomeModule } from './clinical-trials-home/clinical-trials-home.module'
import { ClinicalTrialsDetailModule } from './clinical-trials-detail/clinical-trials-detail.module'
import { ClinicalTrialsSummaryModule } from './clinical-trials-detail/clinical-trials-summary/clinical-trials-summary.module'

@NgModule({
  declarations: [ClinicalTrialsComponent],
  imports: [
    CommonModule,
    ClinicalTrialsRoutingModule,
    ClinicalTrialsHomeModule,
    ClinicalTrialsDetailModule,
    ClinicalTrialsSummaryModule,
  ],
})
export class ClinicalTrialsModule {}
