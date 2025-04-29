import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEndorsementDisplayComponent } from './endorsement-display.component'
import { NzCommentModule } from 'ng-zorro-antd/comment'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'

@NgModule({
  declarations: [CvcEndorsementDisplayComponent],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    NzTypographyModule,
    NzIconModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NzGridModule,
    NzCardModule,
    NzCollapseModule,
    PushPipe,
    LetDirective,
    CvcPipesModule,
    CvcOrganizationTagModule,
    CvcActivityFeed,
  ],
  exports: [CvcEndorsementDisplayComponent],
})
export class CvcEndorsementDisplayModule {}
