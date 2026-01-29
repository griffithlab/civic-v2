import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcApproveAssertionButtonComponent } from '@app/components/approvals/approve-assertion-button/approve-assertion-button.component'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-buttons.module'
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { AssertionsDetailRoutingModule } from './assertions-detail-routing.module'
import { AssertionsDetailView } from './assertions-detail.view'
import { CvcCanPerformApprovalActionsPipe } from '@app/components/approvals/approval-pipes/can-perform-approval-actions.pipe'
import { CvcApprovalActionTooltipPipe } from '@app/components/approvals/approval-pipes/approval-action-tooltip.pipe'
import { CvcCanCreateApprovalPipe } from '@app/components/approvals/approval-pipes/can-create-approval.pipe'
import { CvcApprovableDirective } from '@app/components/approvals/approvable/approvable.component'

@NgModule({
  declarations: [AssertionsDetailView],
  imports: [
    CommonModule,
    AssertionsDetailRoutingModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzFlexModule,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzAlertModule,
    NzGridModule,
    NzPopoverModule,
    NzSpinModule,
    NzEmptyModule,
    CvcPipesModule,
    CvcCanCreateApprovalPipe,
    CvcApprovalActionTooltipPipe,
    CvcCanPerformApprovalActionsPipe,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcApprovableDirective,
    CvcRevertEntityButtonModule,
    CvcModerateEntityButtonsModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
    CvcMolecularProfileTagModule,
    CvcApproveAssertionButtonComponent,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcAutoHeightDivModule,
    CvcCanPerformApprovalActionsPipe,
  ],
})
export class AssertionsDetailModule {}
