import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsSummaryComponent } from './drugs-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';

@NgModule({
  declarations: [DrugsSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
  ]
})
export class DrugsSummaryModule { }
