import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionSubmitPage } from './assertion-submit.page'
import { CvcAssertionSubmitModule } from '@app/forms2/config/assertion-submit/assertion-submit.module'

@NgModule({
  declarations: [AssertionSubmitPage],
  imports: [CommonModule, CvcAssertionSubmitModule],
})
export class AssertionSubmitModule {}
