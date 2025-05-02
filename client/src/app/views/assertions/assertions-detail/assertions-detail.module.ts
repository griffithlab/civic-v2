import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcEndorseAssertionButtonComponent } from '@app/components/endorsements/endorse-assertion-button/endorse-assertion-button.component'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcFlaggableComponent } from '@app/components/shared/flaggable/flaggable.component'
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
import { CvcCanCreateEndorsementPipe } from '@app/components/endorsements/endorsement-pipes/can-create-endorsement.pipe'
import { CvcCanPerformEndorsementActionsPipe } from '@app/components/endorsements/endorsement-pipes/can-perform-endorsement-actions.pipe'
import { CvcEndorsementActionTooltipPipe } from '@app/components/endorsements/endorsement-pipes/endorsement-action-tooltip.pipe'

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
    CvcCanCreateEndorsementPipe,
    CvcEndorsementActionTooltipPipe,
    CvcCanPerformEndorsementActionsPipe,
    CvcSectionNavigationModule,
    CvcFlaggableComponent,
    CvcEntitySubscriptionButtonModule,
    CvcRevertEntityButtonModule,
    CvcModerateEntityButtonsModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
    CvcMolecularProfileTagModule,
    CvcEndorseAssertionButtonComponent,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcAutoHeightDivModule,
    CvcCanPerformEndorsementActionsPipe,
  ],
})
export class AssertionsDetailModule {}
