import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhenotypesRoutingModule } from './phenotypes-routing.module';
import { PhenotypesComponent } from './phenotypes.component';
import { PhenotypesBrowseComponent } from './phenotypes-browse/phenotypes-browse.component';
import { PhenotypesDetailComponent } from './phenotypes-detail/phenotypes-detail.component';
import { PhenotypesSummaryComponent } from './phenotypes-summary/phenotypes-summary.component';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
  declarations: [PhenotypesComponent, PhenotypesBrowseComponent, PhenotypesDetailComponent, PhenotypesSummaryComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    PhenotypesRoutingModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule
  ]
})
export class PhenotypesModule { }
