import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseasesRoutingModule } from './diseases-routing.module';
import { DiseasesComponent } from './diseases.component';
import { DiseasesDetailModule } from './diseases-detail/diseases-detail.module';
import { DiseasesSummaryModule } from './diseases-detail/diseases-summary/diseases-summary.module';
import { RouterModule } from '@angular/router';
import { DiseasesHomeModule } from './diseases-home/diseases-home.module';

@NgModule({
  declarations: [DiseasesComponent],
  imports: [
    CommonModule,
    RouterModule,
    DiseasesRoutingModule,
    DiseasesHomeModule,
    DiseasesDetailModule,
    DiseasesSummaryModule,
  ],
})
export class DiseasesModule {}
