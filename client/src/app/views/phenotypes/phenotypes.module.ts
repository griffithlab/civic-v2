import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhenotypesRoutingModule } from './phenotypes-routing.module';
import { PhenotypesComponent } from './phenotypes.component';
import { PhenotypesBrowseComponent } from './phenotypes-browse/phenotypes-browse.component';
import { PhenotypesDetailComponent } from './phenotypes-detail/phenotypes-detail.component';
import { PhenotypesSummaryComponent } from './phenotypes-summary/phenotypes-summary.component';
import { IconsProviderModule } from '@app/icons-provider.module';


@NgModule({
  declarations: [PhenotypesComponent, PhenotypesBrowseComponent, PhenotypesDetailComponent, PhenotypesSummaryComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    PhenotypesRoutingModule
  ]
})
export class PhenotypesModule { }
