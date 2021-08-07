import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { DrugsRoutingModule } from './drugs-routing.module';
import { DrugsComponent } from './drugs.component';
import { DrugsBrowseComponent } from './drugs-browse/drugs-browse.component';
import { DrugsDetailComponent } from './drugs-detail/drugs-detail.component';
import { DrugsSummaryComponent } from './drugs-summary/drugs-summary.component';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';


@NgModule({
  declarations: [DrugsComponent, DrugsBrowseComponent, DrugsDetailComponent, DrugsSummaryComponent],
  imports: [
    SectionNavigationModule,
    CommonModule,
    DrugsRoutingModule,
    IconsProviderModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule
  ]
})
export class DrugsModule { }
