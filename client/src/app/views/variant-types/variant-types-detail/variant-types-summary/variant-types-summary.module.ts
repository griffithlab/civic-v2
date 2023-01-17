import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantTypesSummaryComponent } from './variant-types-summary.component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module'
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module'

@NgModule({
  declarations: [VariantTypesSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    CvcEvidenceTableModule,
    CvcSourcesTableModule,
    CvcVariantsTableModule,
  ],
})
export class VariantTypesSummaryModule {}
