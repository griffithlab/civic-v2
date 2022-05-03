import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseasesSummaryComponent } from './diseases-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';

@NgModule({
  declarations: [DiseasesSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
  ]
})
export class DiseasesSummaryModule { }
