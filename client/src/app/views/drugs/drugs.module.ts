import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { DrugsRoutingModule } from './drugs-routing.module';
import { DrugsComponent } from './drugs.component';
import { DrugsDetailComponent } from './drugs-detail/drugs-detail.component';
import { DrugsSummaryComponent } from './drugs-summary/drugs-summary.component';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { DrugsHomeModule } from './drugs-home/drugs-home.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DrugsComponent,
    DrugsDetailComponent,
    DrugsSummaryComponent,
  ],
  imports: [
    SectionNavigationModule,
    DrugsHomeModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
    CommonModule,
    DrugsRoutingModule,
    NzIconModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule,
  ],
})
export class DrugsModule {}
