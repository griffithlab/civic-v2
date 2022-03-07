import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsRoutingModule } from './assertions-routing.module';
import { AssertionsComponent } from './assertions.component';
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
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { AssertionsHomeModule } from './assertions-home/assertions-home.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcFlagListAndFilterModule } from '@app/components/flags/flag-list-and-filter/flag-list-and-filter.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module';
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-button.module';
import { AssertionsSummaryModule } from './assertions-summary/assertions-summary.module';
import { AssertionsCommentsModule } from './assertions-comments/assertions-comments.module';
import { AssertionsRevisionsModule } from './assertions-revisions/assertions-revisions.module';
import { AssertionsFlagsModule } from './assertions-flags/assertions-flags.module';
import { AssertionsDetailModule } from './assertions-detail/assertions-detail.module';

@NgModule({
  declarations: [
    AssertionsComponent,
  ],
  imports: [
    CommonModule,
    AssertionsRoutingModule,
    AssertionsHomeModule,
    AssertionsSummaryModule,
    AssertionsCommentsModule,
    AssertionsRevisionsModule,
    AssertionsFlagsModule,
    AssertionsDetailModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    CvcPipesModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcPhenotypeTagModule,
    CvcTagListModule,
    CvcUserTagModule,
    CvcCommentListModule,
    CvcFlagListAndFilterModule,
    CvcFlaggableModule,
    CvcEventFeedModule,
    CvcSectionNavigationModule,
    CvcStatusTagModule,
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
    ReactiveComponentModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    NzInputModule,
    FormsModule,
    CvcTabNavigationModule,
    NzSelectModule,
    NzAlertModule,
    CvcRevertEntityButtonModule,
    EvidenceModule,
    CvcContributorAvatarsModule,
    CvcEntitySubscriptionButtonModule,
    CvcModerateEntityButtonsModule
  ],
  exports: [
    AssertionsComponent,
  ]
})
export class AssertionsModule { }
