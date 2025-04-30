import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEndorsementListComponent } from './endorsement-list.component'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEndorsementDisplayModule } from '../endorsement-display/endorsement-display.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcCanApproveEndorsement } from '@app/components/endorsements/endorsement-pipes/can-approve-endorsement.pipe'
import { CvcCanRevokeEndorsement } from '@app/components/endorsements/endorsement-pipes/can-revoke-endorsement.pipe'
import { CvcEndorseAssertionButtonComponent } from '../endorse-assertion-button/endorse-assertion-button.component'
import { CvcCanCreateEndorsementPipe } from '@app/components/endorsements/endorsement-pipes/can-create-endorsement.pipe'
import { CvcCanPerformEndorsementActionsPipe } from '@app/components/endorsements/endorsement-pipes/can-perform-endorsement-actions.pipe'
import { CvcEndorsementActionTooltipPipe } from '@app/components/endorsements/endorsement-pipes/endorsement-action-tooltip.pipe'

@NgModule({
  declarations: [CvcEndorsementListComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzAlertModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    NzAvatarModule,
    NzTagModule,
    NzTypographyModule,
    NzFlexModule,
    NzPopoverModule,
    NzCollapseModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcEndorseAssertionButtonComponent,
    CvcEndorsementDisplayModule,
    CvcOrganizationTagModule,
    CvcUserTagModule,
    CvcActivityFeed,
    CvcCanPerformEndorsementActionsPipe,
    CvcCanCreateEndorsementPipe,
    CvcCanApproveEndorsement,
    CvcEndorsementActionTooltipPipe,
    CvcCanRevokeEndorsement,
  ],
  exports: [CvcEndorsementListComponent],
})
export class CvcEndorsementListModule {}
