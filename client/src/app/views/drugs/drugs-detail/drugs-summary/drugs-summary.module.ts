import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsSummaryComponent } from './drugs-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';

@NgModule({
  declarations: [DrugsSummaryComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    NzToolTipModule,
    CvcTagListModule,
    CvcAutoHeightDivModule,
    CvcPipesModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,

    NgxJsonViewerModule,
  ]
})
export class DrugsSummaryModule { }