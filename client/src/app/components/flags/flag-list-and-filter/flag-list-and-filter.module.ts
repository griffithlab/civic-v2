import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFlagListAndFilterComponent } from './flag-list-and-filter.component'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzListModule } from 'ng-zorro-antd/list'
import { FormsModule } from '@angular/forms'
import { CvcFlagAddFormModule } from '@app/forms/flag-add/flag-add.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { FlagListModule } from '../flag-list/flag-list.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcFlagListAndFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
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
    CvcPipesModule
  ],
  exports: [CvcFlagListAndFilterComponent],
})
export class CvcFlagListAndFilterModule {}
