import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantSubmitFormModule } from '@app/forms/config/variant-submit/variant-submit.module'
import { VariantSubmitTestPage } from './variant-submit-test.page'

@NgModule({
  declarations: [VariantSubmitTestPage],
  imports: [CommonModule, VariantSubmitFormModule],
})
export class VariantSubmitTestModule {}
