import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DiseasesSummaryComponent } from './diseases-summary.component';

@NgModule({
  declarations: [DiseasesSummaryComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
  ]
})
export class DiseasesSummaryModule { }