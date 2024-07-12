import { NgModule } from '@angular/core'
import { VariantsSummaryPage } from './variants-summary.page'
import { CvcGeneVariantSummaryComponent } from '@app/components/variants/gene-variant-summary/gene-variant-summary.page'
import { CvcFactorVariantSummaryComponent } from '@app/components/variants/factor-variant-summary/factor-variant-summary.page'
import { PushPipe } from '@ngrx/component'
import { CommonModule } from '@angular/common'
import { CvcFusionVariantSummaryComponent } from '@app/components/variants/fusion-variant-summary/fusion-variant-summary.page'

@NgModule({
  declarations: [VariantsSummaryPage],
  imports: [
    CommonModule,
    PushPipe,
    CvcGeneVariantSummaryComponent,
    CvcFactorVariantSummaryComponent,
    CvcFusionVariantSummaryComponent,
  ],
  exports: [VariantsSummaryPage],
})
export class VariantsSummaryModule {}
