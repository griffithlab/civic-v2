import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionSpecificationCodesSubmitPage } from './assertion-specification-codes-submit.page'
import { CvcSpecificationSubmitFormModule } from '@app/forms/config/specification-submit/specification-submit.form.module'

@NgModule({
  declarations: [AssertionSpecificationCodesSubmitPage],
  imports: [CommonModule, CvcSpecificationSubmitFormModule],
})
export class AssertionSpecificationCodesSubmitModule {}
