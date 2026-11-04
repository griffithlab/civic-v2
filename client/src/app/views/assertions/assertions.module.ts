import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AssertionsRoutingModule } from './assertions-routing.module'
import { AssertionsView } from './assertions.view'
import { AssertionsReviseModule } from './assertions-revise/assertions-revise.module'
import { AssertionsApprovalsModule } from './assertions-detail/assertions-approvals/assertions-approvals.module'
import { AssertionEvaluateModule } from './assertion-evaluate/assertion-evaluate.module'

@NgModule({
  declarations: [AssertionsView],
  imports: [
    CommonModule,
    AssertionsRoutingModule,
    AssertionsReviseModule,
    AssertionsApprovalsModule,
    AssertionEvaluateModule,
  ],
  exports: [AssertionsView],
})
export class AssertionsModule {}
