import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsSuggestPage } from './variants-suggest.page'
import { CvcVariantReviseFormModule } from '@app/forms/config/variant-revise/variant-revise.form.module'

@NgModule({
  declarations: [VariantsSuggestPage],
  imports: [CommonModule, CvcVariantReviseFormModule],
})
export class VariantsSuggestModule {}
