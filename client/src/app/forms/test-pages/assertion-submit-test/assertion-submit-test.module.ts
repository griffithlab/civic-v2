import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionSubmitTestPage } from './assertion-submit-test.page'
import { CvcAssertionSubmitModule } from '@app/forms/config/assertion-submit/assertion-submit.module'

@NgModule({
  declarations: [AssertionSubmitTestPage],
  imports: [CommonModule, CvcAssertionSubmitModule],
})
export class AssertionSubmitTestModule {}
