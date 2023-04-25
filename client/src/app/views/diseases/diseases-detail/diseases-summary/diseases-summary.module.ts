import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { LetModule, PushModule } from '@ngrx/component'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { DiseasesSummaryComponent } from './diseases-summary.component'
import { CvcMyDiseaseInfoModule } from '@app/components/diseases/my-disease-info/my-disease-info.module'

@NgModule({
  declarations: [DiseasesSummaryComponent],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
    CvcMyDiseaseInfoModule
  ]
})
export class DiseasesSummaryModule {}
