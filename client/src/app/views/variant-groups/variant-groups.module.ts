import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsRoutingModule } from './variant-groups-routing.module';
import { VariantGroupsComponent } from './variant-groups.component';
import { FormsModule } from '@angular/forms';

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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoModule } from 'ngx-timeago';
import { EvidenceModule } from '../evidence/evidence.module';
import { VariantGroupsDetailComponent } from './variant-groups-detail/variant-groups-detail.component';
import { VariantGroupsSummaryComponent } from './variant-groups-summary/variant-groups-summary.component';
import { VariantGroupsCommentsComponent } from './variant-groups-comments/variant-groups-comments.component';
import { VariantGroupsRevisionsComponent } from './variant-groups-revisions/variant-groups-revisions.component';
import { VariantGroupsFlagsComponent } from './variant-groups-flags/variant-groups-flags.component';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { VariantGroupsHomeModule } from './variant-groups-home/variant-groups-home.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { CvcFlagListModule } from '@app/components/flags/flag-list/flag-list.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';

@NgModule({
  declarations: [
    VariantGroupsComponent,
    VariantGroupsDetailComponent,
    VariantGroupsSummaryComponent,
    VariantGroupsCommentsComponent,
    VariantGroupsRevisionsComponent,
    VariantGroupsFlagsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    VariantGroupsRoutingModule,
    VariantGroupsHomeModule,
    CvcSectionNavigationModule,
    CvcEmptyRevisableModule,
    CvcOrgSelectorBtnGroupModule,
    CvcParticipantListModule,
    CvcCommentListModule,
    CvcFlagListModule,
    CvcFlaggableModule,
    NzIconModule,
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
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
    EvidenceModule,
    NzSelectModule,
    CvcEntitySubscriptionButtonModule
  ],
  exports: [
    VariantGroupsDetailComponent,
    VariantGroupsSummaryComponent,
    VariantGroupsCommentsComponent,
    VariantGroupsRevisionsComponent,
    VariantGroupsFlagsComponent,
  ],
})
export class VariantGroupsModule {}
