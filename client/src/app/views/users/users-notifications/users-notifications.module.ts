import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersNotificationsComponent } from './users-notifications.component'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import { CvcEventTimelineItemModule } from '@app/components/events/event-timeline-item/event-timeline-item-module'
import { FormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzSpaceModule } from 'ng-zorro-antd/space'

@NgModule({
  declarations: [UsersNotificationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    NzToolTipModule,
    NzSpinModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzCheckboxModule,
    NzTimelineModule,
    NzSpaceModule,

    CvcEventTimelineItemModule,
    CvcPipesModule,
    CvcParticipantListModule,
  ],
})
export class UsersNotificationsModule {}
