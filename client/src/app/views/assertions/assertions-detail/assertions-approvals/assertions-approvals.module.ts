import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsApprovalsPage } from './assertions-approvals.page'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcApprovalListComponent } from '@app/components/approvals/approval-list/approval-list.component'

@NgModule({
  declarations: [AssertionsApprovalsPage],
  imports: [CommonModule, CvcApprovalListComponent, CvcAutoHeightDivModule],
  exports: [AssertionsApprovalsPage],
})
export class AssertionsApprovalsModule {}
