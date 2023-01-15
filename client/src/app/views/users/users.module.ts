import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { UsersHomeModule } from './users-home/users-home.module';
import { UsersAssertionsModule } from './users-assertions/users-assertions.module';
import { UsersDetailModule } from './users-detail/users-detail.module';
import { UsersEventsModule } from './users-events/users-events.module';
import { UsersEvidenceModule } from './users-evidence/users-evidence.module';
import { UsersSourceSuggestionsModule } from './users-source-suggestions/users-source-suggestions.module';
import { UsersNotificationsModule } from './users-notifications/users-notifications.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetModule, PushModule,
    UsersRoutingModule,
    UsersHomeModule,
    UsersAssertionsModule,
    UsersDetailModule,
    UsersEventsModule,
    UsersEvidenceModule,
    UsersSourceSuggestionsModule,
    UsersNotificationsModule,
  ],
})
export class UsersModule {}
