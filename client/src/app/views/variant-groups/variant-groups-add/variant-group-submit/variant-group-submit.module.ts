import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantGroupSubmitPage } from './variant-group-submit.page'
import { CvcVariantgroupSubmitFormModule } from '@app/forms2/config/variantgroup-submit/variantgroup-submit.form.module'

@NgModule({
  declarations: [VariantGroupSubmitPage],
  imports: [CommonModule, CvcVariantgroupSubmitFormModule]
})
export class VariantGroupSubmitModule {}
