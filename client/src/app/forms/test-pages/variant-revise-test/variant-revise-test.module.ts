import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantReviseTestPage } from './variant-revise-test.page'
import { CvcGeneVariantReviseFormModule } from '@app/forms/config/gene-variant-revise/gene-variant-revise.form.module'

@NgModule({
  declarations: [VariantReviseTestPage],
  imports: [CommonModule, CvcGeneVariantReviseFormModule],
})
export class VariantReviseTestModule {}
