import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionReviseTestPage } from './assertion-revise-test.page'
import { CvcAssertionReviseModule } from '@app/forms/config/assertion-revise/assertion-revise.module'

@NgModule({
  declarations: [AssertionReviseTestPage],
  imports: [CommonModule, CvcAssertionReviseModule],
})
export class AssertionReviseTestModule {}
