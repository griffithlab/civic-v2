import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantgroupReviseFormModule } from '@app/forms/config/variantgroup-revise/variantgroup-revise.form.module'
import { VariantGroupSuggestPage } from './variant-group-suggest.page'

@NgModule({
  declarations: [VariantGroupSuggestPage],
  imports: [CommonModule, CvcVariantgroupReviseFormModule]
})
export class VariantGroupSuggestModule {}
