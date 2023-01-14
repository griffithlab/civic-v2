import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { PhenotypesSummaryComponent } from './phenotypes-summary.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module';

@NgModule({
  declarations: [PhenotypesSummaryComponent],
  imports: [
    CommonModule,
    NzGridModule,
    CvcAutoHeightDivModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
  ],
})
export class PhenotypesSummaryModule {}
