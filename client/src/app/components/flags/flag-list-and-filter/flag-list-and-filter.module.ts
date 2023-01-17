import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFlagListAndFilterComponent } from './flag-list-and-filter.component'
import { LetModule, PushModule } from '@ngrx/component'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzListModule } from 'ng-zorro-antd/list'
import { NgDatePipesModule } from 'ngx-pipes'
import { FormsModule } from '@angular/forms'
import { CvcFlagAddFormModule } from '@app/forms/flag-add/flag-add.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { FlagListModule } from '../flag-list/flag-list.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter'

@NgModule({
  declarations: [CvcFlagListAndFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetModule,
    PushModule,
    NgDatePipesModule,
    NzButtonModule,
    NzFormModule,
    NzRadioModule,
    NzButtonModule,
    CvcUserTagModule,
    NzListModule,
    NzCardModule,
    CvcFlagAddFormModule,
    FlagListModule,
    NzEmptyModule,
    CvcParticipantListModule,
    NzAvatarModule,
    NzSpaceModule,
  ],
  exports: [CvcFlagListAndFilterComponent],
})
export class CvcFlagListAndFilterModule {}
