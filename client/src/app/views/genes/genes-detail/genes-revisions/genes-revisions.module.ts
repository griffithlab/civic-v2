import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetModule, PushModule } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

import { GenesRevisionsPage } from './genes-revisions.page'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { RevisionListModule } from '@app/components/revisions/revision-list/revision-list.module'
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module'

@NgModule({
  declarations: [GenesRevisionsPage],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    CvcParticipantListModule,
    RevisionListModule,
    CvcRevisionsListAndFilterModule,
  ],
})
export class GenesRevisionsModule {}
