import { Component, input, Signal } from '@angular/core'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import {
  AssertionDetailFieldsFragment,
  ApprovalListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilters,
  ActivityFeedSettings,
} from '@app/components/activities/activity-feed/activity-feed.types'
import {
  feedDefaultFilters,
  feedDefaultSettings,
} from '@app/components/activities/activity-feed/activity-feed.config'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcApprovalActionTooltipPipe } from '@app/components/approvals/approval-pipes/approval-action-tooltip.pipe'
import { CvcCanRevokeApproval } from '@app/components/approvals/approval-pipes/can-revoke-approval.pipe'
import { CvcApproveAssertionButtonComponent } from '@app/components/approvals/approve-assertion-button/approve-assertion-button.component'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { toSignal } from '@angular/core/rxjs-interop'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { CvcCanApproveApproval } from '@app/components/approvals/approval-pipes/can-approve-approval.pipe'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'cvc-approval-item',
  imports: [
    CommonModule,
    NzListModule,
    NzTypographyModule,
    NzCollapseModule,
    NzDescriptionsModule,
    NzTagModule,
    NzFlexModule,
    CvcPipesModule,
    CvcActivityFeed,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcApprovalActionTooltipPipe,
    CvcCanRevokeApproval,
    CvcCanApproveApproval,
    CvcApproveAssertionButtonComponent,
  ],
  templateUrl: './approval-item.component.html',
  styleUrl: './approval-item.component.less',
})
export class CvcApprovalItemComponent {
  cvcApproval = input.required<ApprovalListNodeFragment>()
  cvcAssertion = input.required<AssertionDetailFieldsFragment>()

  viewer: Signal<Maybe<Viewer>>

  constructor(private viewerService: ViewerService) {
    this.viewer = toSignal(this.viewerService.viewer$)
  }

  feedSettings(): ActivityFeedSettings {
    return {
      ...feedDefaultSettings,
      showOrganization: false,
    }
  }

  feedFilters(approval: ApprovalListNodeFragment): ActivityFeedFilters {
    return {
      ...feedDefaultFilters,
      linkedApprovalId: approval.id,
      occurredAfter: new Date(approval.lastReviewed),
    }
  }
}
