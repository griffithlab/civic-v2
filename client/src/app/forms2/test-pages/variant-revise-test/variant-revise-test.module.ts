import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantReviseTestPage } from './variant-revise-test.page'
import { CvcVariantReviseFormModule } from '@app/forms2/config/variant-revise/variant-revise.form.module'

@NgModule({
  declarations: [VariantReviseTestPage],
  imports: [CommonModule, CvcVariantReviseFormModule],
})
export class VariantReviseTestModule {}

