import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEventFeedComponent } from './event-feed.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcEventTimelineModule } from '../event-timeline/event-timeline.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcEventFeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzSwitchModule,
    NzGridModule,
    NzSpaceModule,
    NzEmptyModule,
    NzAvatarModule,
    NzSpinModule,
    NzBadgeModule,
    NzToolTipModule,
    CvcEventTimelineModule,
    CvcPipesModule,
    CvcParticipantListModule,
    CvcPipesModule
  ],
  exports: [CvcEventFeedComponent]
})
export class CvcEventFeedModule { }
