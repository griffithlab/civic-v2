import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsDetailView } from './assertions-detail.view'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module'
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-buttons.module'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { AssertionsDetailRoutingModule } from './assertions-detail-routing.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEndorseAssertionButtonComponent } from '@app/components/shared/endorse-assertion-button/endorse-assertion-button.component'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcFlaggableComponent } from '@app/components/shared/flaggable/flaggable.component'

@NgModule({
  declarations: [AssertionsDetailView],
  imports: [
    CommonModule,
    AssertionsDetailRoutingModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzAlertModule,
    NzGridModule,
    NzPopoverModule,
    CvcPipesModule,
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
  ],
})
export class AssertionsDetailModule {}
