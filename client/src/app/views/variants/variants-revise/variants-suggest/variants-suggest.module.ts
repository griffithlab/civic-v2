import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsSuggestPage } from './variants-suggest.page'
import { CvcGeneVariantReviseFormModule } from '@app/forms/config/gene-variant-revise/gene-variant-revise.form.module'

@NgModule({
  declarations: [VariantsSuggestPage],
  imports: [CommonModule, CvcGeneVariantReviseFormModule],
})
export class VariantsSuggestModule {}
