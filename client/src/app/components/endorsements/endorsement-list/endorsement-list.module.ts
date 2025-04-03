import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEndorsementListComponent } from './endorsement-list.component'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEndorsementDisplayModule } from '../endorsement-display/endorsement-display.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { CvcEndorsementStatusTag } from '../endorsement-status-tag/endorsement-status-tag.component'

@NgModule({
  declarations: [CvcEndorsementListComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzAvatarModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    NzAvatarModule,
    NzTagModule,
    NzTypographyModule,
    NzSpaceModule,
    NzPopoverModule,
    CvcPipesModule,
    CvcEndorsementDisplayModule,
    CvcOrganizationTagModule,
    CvcActivityFeed,
    CvcEndorsementStatusTag,
  ],
  exports: [CvcEndorsementListComponent],
})
export class CvcEndorsementListModule {}
