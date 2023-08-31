import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcOrganizationLeaderboardsComponent } from './organization-leaderboards.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzListModule } from 'ng-zorro-antd/list'
import { CvcOrganizationTagModule } from '../organization-tag/organization-tag.module'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzTagModule } from 'ng-zorro-antd/tag'

@NgModule({
  declarations: [CvcOrganizationLeaderboardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PushPipe,
    LetDirective,
    NzBadgeModule,
    NzDividerModule,
    NzSpaceModule,
    NzAvatarModule,
    NzGridModule,
    NzCardModule,
    NzListModule,
    NzTabsModule,
    NzSelectModule,
    NzTypographyModule,
    NzEmptyModule,
    NzIconModule,
    NzTagModule,
    CvcPipesModule,
    CvcOrganizationTagModule,
  ],
  exports: [CvcOrganizationLeaderboardsComponent],
})
export class CvcOrganizationLeaderboardsModule {}
