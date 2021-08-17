import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceComponent } from './evidence.component';
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
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoModule } from 'ngx-timeago';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EvidenceDetailComponent } from './evidence-detail/evidence-detail.component';
import { EvidenceSummaryComponent } from './evidence-summary/evidence-summary.component';
import { EvidenceCommentsComponent } from './evidence-comments/evidence-comments.component';
import { EvidenceFlagsComponent } from './evidence-flags/evidence-flags.component';
import { EvidenceRevisionsComponent } from './evidence-revisions/evidence-revisions.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { EvidenceHomeModule } from './evidence-home/evidence-home.module';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { CvcFlagListModule } from '@app/components/flags/flag-list/flag-list.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';

@NgModule({
  declarations: [
    EvidenceComponent,
    EvidenceDetailComponent,
    EvidenceSummaryComponent,
    EvidenceCommentsComponent,
    EvidenceFlagsComponent,
    EvidenceRevisionsComponent,
  ],
  imports: [
    CommonModule,
    EvidenceRoutingModule,
    EvidenceHomeModule,
    CvcEntityTableCardModule,
    CvcAssertionsTableModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcClinicalTrialTagModule,
    CvcSourceTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcPhenotypeTagModule,
    CvcTagListModule,
    CvcEvidenceRatingModule,
    CvcUserTagModule,
    CvcCommentListModule,
    CvcFlagListModule,
    CvcFlaggableModule,
    CvcEventFeedModule,
    CvcDetailsNavigationModule,
    CvcStatusTagModule,
    NgxJsonViewerModule,
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
    ReactiveComponentModule,
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,

    NzSelectModule
  ],
  exports: [
    EvidenceComponent,
    EvidenceDetailComponent,
    EvidenceSummaryComponent,
    EvidenceFlagsComponent,
    EvidenceCommentsComponent,
    EvidenceRevisionsComponent
  ]
})
export class EvidenceModule { }
