import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhenotypesDetailModule } from './phenotypes-detail/phenotypes-detail.module';
import { PhenotypesSummaryModule } from './phenotypes-detail/phenotypes-summary/phenotypes-summary.module';
import { PhenotypesHomeModule } from './phenotypes-home/phenotypes-home.module';
import { PhenotypesRoutingModule } from './phenotypes-routing.module';
import { PhenotypesComponent } from './phenotypes.component';

@NgModule({
  declarations: [PhenotypesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PhenotypesRoutingModule,
    PhenotypesHomeModule,
    PhenotypesDetailModule,
    PhenotypesSummaryModule,
  ],
})
export class PhenotypesModule {}
