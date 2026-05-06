import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AssertionsRoutingModule } from './assertions-routing.module'
import { AssertionsView } from './assertions.view'
import { AssertionsReviseModule } from './assertions-revise/assertions-revise.module'
import { AssertionsApprovalsModule } from './assertions-detail/assertions-approvals/assertions-approvals.module'

@NgModule({
  declarations: [AssertionsView],
  imports: [
    CommonModule,
    AssertionsRoutingModule,
    AssertionsReviseModule,
    AssertionsApprovalsModule,
  ],
  exports: [AssertionsView],
})
export class AssertionsModule {}
