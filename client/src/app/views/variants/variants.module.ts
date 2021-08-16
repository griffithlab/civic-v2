// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// zorro imports
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

// additional imports
import { TimeagoModule } from 'ngx-timeago';
import { ReactiveComponentModule } from '@ngrx/component';

// civic imports
import { IconsProviderModule } from '@app/icons-provider.module';

import { VariantsComponent } from './variants.component';
import { VariantsRoutingModule } from './variants-routing.module';
import { VariantsDetailComponent } from './variants-detail/variants-detail.component';
import { VariantSummaryComponent } from './variants-summary/variants-summary.component';
import { VariantsCommentsComponent } from './variants-comments/variants-comments.component';
import { VariantsFlagsComponent } from './variants-flags/variants-flags.component';
import { EvidenceModule } from '../evidence/evidence.module';
import { VariantsRevisionsComponent } from '../evidence/variants-revisions/variants-revisions.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { VariantsHomeModule } from './variants-home/variants-home.module';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcMyVariantInfoModule } from '@app/components/variants/my-variant-info/my-variant-info.module';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { CvcFlagListModule } from '@app/components/flags/flag-list/flag-list.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';

@NgModule({
  declarations: [
    VariantsComponent,
    VariantsDetailComponent,
    VariantSummaryComponent,
    VariantsCommentsComponent,
    VariantsFlagsComponent,
    VariantsRevisionsComponent,
  ],
  imports: [
    CommonModule,
    VariantsHomeModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
    CvcEntityTableCardModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcGeneTagModule,
    CvcSourceTagModule,
    CvcVariantTypeTagModule,
    CvcTagListModule,
    CvcMyVariantInfoModule,
    CvcCommentListModule,
    CvcFlagListModule,
    CvcFlaggableModule,
    CvcEventFeedModule,
    CvcEmptyRevisableModule,
    CvcDetailsNavigationModule,
    SectionNavigationModule,
    VariantsRoutingModule,
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
    NzEmptyModule,
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
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,

    EvidenceModule,
  ],
  exports: [VariantsRevisionsComponent],
})
export class VariantsModule {}
