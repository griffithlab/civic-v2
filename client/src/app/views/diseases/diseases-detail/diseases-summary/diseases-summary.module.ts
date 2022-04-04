import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseasesSummaryComponent } from './diseases-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [DiseasesSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
  ]
})
export class DiseasesSummaryModule { }
