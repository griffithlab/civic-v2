import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';

import { IconsProviderModule } from '@app/icons-provider.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EvidenceModule } from '../evidence/evidence.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersEvidenceComponent } from './users-evidence/users-evidence.component';
import { UsersAssertionsComponent } from './users-assertions/users-assertions.component';
import { UsersEventsComponent } from './users-events/users-events.component';
import { UsersHomeModule } from './users-home/users-home.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { CvcUserCardModule } from '@app/components/users/user-card/user-card.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { UsersSourceSuggestionsComponent } from './users-source-suggestions/users-source-suggestions.component';
import { UsersNotificationsComponent } from './users-notifications/users-notifications.component';
import { CvcEventTimelineItemModule } from '@app/components/events/event-timeline-item/event-timeline-item-module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';
import { CvcAvatarUploaderModule } from '@app/components/shared/avatar-uploader/avatar-uploader.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailComponent,
    UsersEvidenceComponent,
    UsersAssertionsComponent,
    UsersEventsComponent,
    UsersSourceSuggestionsComponent,
    UsersNotificationsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersHomeModule,
    CvcAssertionsTableModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    CvcOrganizationTagModule,
    CvcUserCardModule,
    CvcEventFeedModule,

    IconsProviderModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NzCheckboxModule,
    ReactiveComponentModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    NzInputModule,
    FormsModule,
    CvcSectionNavigationModule,
    NzSelectModule,
    EvidenceModule,
    NzImageModule,
    NzStatisticModule,
    CvcTabNavigationModule,
    CvcSourceSuggestionsTableModule,
    CvcEventTimelineItemModule,
    CvcPipesModule,
    NzTimelineModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcParticipantListModule,
    CvcUserAvatarModule,
    CvcAvatarUploaderModule,
    NzAlertModule
  ],
  exports: [
    UsersComponent,
    UsersDetailComponent,
    UsersEvidenceComponent,
    UsersAssertionsComponent,
    UsersEventsComponent,
    UsersSourceSuggestionsComponent,
    UsersNotificationsComponent
  ]
})
export class UsersModule { }
