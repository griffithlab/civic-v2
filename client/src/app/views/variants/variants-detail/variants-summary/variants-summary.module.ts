import { NgModule } from '@angular/core'
import { VariantsSummaryPage } from './variants-summary.page'
import { CvcGeneVariantSummaryComponent } from '@app/components/variants/gene-variant-summary/gene-variant-summary.page'

@NgModule({
  declarations: [VariantsSummaryPage],
  imports: [CvcGeneVariantSummaryComponent],
  exports: [VariantsSummaryPage],
})
export class VariantsSummaryModule {}
