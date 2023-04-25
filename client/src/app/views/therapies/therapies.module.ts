import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TherapiesRoutingModule } from './therapies-routing.module'
import { TherapiesComponent } from './therapies.component'
import { TherapiesDetailModule } from './therapies-detail/therapies-detail.module'
import { RouterModule } from '@angular/router'
import { TherapiesHomeModule } from './therapies-home/therapies-home.module'
import { TherapiesSummaryModule } from './therapies-detail/therapies-summary/therapies-summary.module'

@NgModule({
  declarations: [TherapiesComponent],
  imports: [
    CommonModule,
    RouterModule,
    TherapiesRoutingModule,
    TherapiesHomeModule,
    TherapiesDetailModule,
    TherapiesSummaryModule,
  ],
})
export class TherapiesModule {}
