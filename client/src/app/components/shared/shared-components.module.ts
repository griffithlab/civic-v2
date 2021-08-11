import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ReactiveComponentModule } from '@ngrx/component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { TimeagoModule } from 'ngx-timeago';

import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FlaggableComponent } from './flaggable/flaggable.component';
import { FlaggableOptionsDirective } from './flaggable/flaggable-options.directive';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FormErrorsAlertComponent } from './form-errors-alert/form-errors-alert.component';
import { LifecycleActionsComponent } from './lifecycle-actions/lifecycle-actions.component';
import { OrgSelectorBtnDirective } from './org-selector-btn-group/org-selector-btn.directive';
import { OrgSelectorBtnGroupComponent } from './org-selector-btn-group/org-selector-btn-group.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserPopoverComponent } from './user-popover/user-popover.component';
import { CommentDisplayComponent } from './comment-display/comment-display.component';
import { FlagEntityComponent } from './flag-add/flag-entity.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { GenesComponentsModule } from '../genes/genes-components.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { VariantsMenuComponent } from './variants-menu/variants-menu.component';
import { FlagListComponent } from './flag-list/flag-list.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ResolveFlagComponent } from './resolve-flag/resolve-flag.component';
import { ClearableTextComponentFilter } from './clearable-text-filter/clearable-text-filter.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { QuicksearchComponent } from './quicksearch/quicksearch-component';
import { UserCardComponent } from './user-card/user-card.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { EvidenceCardComponent } from './evidence-card/evidence-card.component';
import { AssertionCardComponent } from './assertion-card/assertion-card.component';
import { OrganizationCardComponent } from './organization-card/organization-card.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzImageModule } from 'ng-zorro-antd/image';
import { OrganizationAvatarComponent } from './organization-avatar/organization-avatar.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { OrgTagComponent } from './org-tag/org-tag.component';
import { RevisionTagComponent } from './revision-tag/revision-tag.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { CommentTagComponent } from './comment-tag/comment-tag.component';
import { EvidenceTagComponent } from './evidence-tag/evidence-tag.component';
import { AssertionTagComponent } from './assertion-tag/assertion-tag.component';
import { FlagTagComponent } from './flag-tag/flag-tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { OrgPopoverComponent } from './org-popover/org-popover.component';
import { GenePopoverComponent } from './gene-popover/gene-popover.component';
import { EvidencePopoverComponent } from './evidence-popover/evidence-popover.component';
import { ContributorAvatarsComponent } from './contributor-avatars/contributor-avatars.component';
import { ContributorStackComponent } from './contributor-stack/contributor-stack.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DetailsNavigationComponent } from './details-navigation/details-navigation.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MyVariantInfoComponent } from './my-variant-info/my-variant-info.component';
import { EvidenceRatingComponent } from './evidence-rating/evidence-rating.component';
import { VariantTagComponent } from './variant-tag/variant-tag.component';
import { VariantPopoverComponent } from './variant-popover/variant-popover.component';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DiseaseTagComponent } from './disease-tag/disease-tag.component';
import { DrugTagComponent } from './drug-tag/drug-tag.component';
import { PhenotypeTagComponent } from './phenotype-tag/phenotype-tag.component';
import { ClinicalTrialTagComponent } from './clinical-trial-tag/clinical-trial-tag.component';
import { VariantTypeTagComponent } from './variant-type-tag/variant-type-tag.component';
import { StatusTagComponent } from './status-tag/status-tag.component';
import { AssertionPopoverComponent } from './assertion-popover/assertion-popover.component';
import { SourceTagComponent } from './source-tag/source-tag.component';

import { EmptyRevisableComponent } from './empty-revisable/empty-revisable.component';
import { ClinicalTrialPopoverComponent } from './clinical-trial-popover/clinical-trial-popover.component';
import { DiseasePopoverComponent } from './disease-popover/disease-popover.component';
import { DrugPopoverComponent } from './drug-popover/drug-popover.component';
import { PhenotypePopoverComponent } from './phenotype-popover/phenotype-popover.component';
import { SourcePopoverComponent } from './source-popover/source-popover.component';
import { VariantTypePopoverComponent } from './variant-type-popover/variant-type-popover.component';
import { CommentPopoverComponent } from './comment-popover/comment-popover.component';
import { VariantgroupTagComponent } from './variantgroup-tag/variantgroup-tag.component';
import { TagPileupComponent } from './tag-pileup/tag-pileup.component';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcLinkTagModule } from './link-tag/link-tag.module';
import { CvcGeneTagModule } from '../genes/gene-tag/gene-tag.module';


@NgModule({
  declarations: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
    OrgSelectorBtnDirective,
    FormErrorsAlertComponent,
    FormButtonsComponent,
    FlaggableComponent,
    LifecycleActionsComponent,
    FlaggableOptionsDirective,
    ParticipantListComponent,
    EventFeedComponent,
    UserAvatarComponent,
    UserPopoverComponent,
    CommentDisplayComponent,
    VariantsMenuComponent,
    FlagEntityComponent,
    FlagListComponent,
    ResolveFlagComponent,
    ClearableTextComponentFilter,
    QuicksearchComponent,
    UserCardComponent,
    EvidenceCardComponent,
    AssertionCardComponent,
    OrganizationCardComponent,
    OrganizationAvatarComponent,
    UserTagComponent,
    OrgTagComponent,
    RevisionTagComponent,
    EventTimelineComponent,
    CommentTagComponent,
    EvidenceTagComponent,
    AssertionTagComponent,
    FlagTagComponent,
    TagListComponent,
    OrgPopoverComponent,
    GenePopoverComponent,
    EvidencePopoverComponent,
    ContributorAvatarsComponent,
    SourceTagComponent,
    ContributorStackComponent,
    DetailsNavigationComponent,
    MyVariantInfoComponent,
    EvidenceRatingComponent,
    VariantTagComponent,
    VariantPopoverComponent,
    DiseaseTagComponent,
    DrugTagComponent,
    PhenotypeTagComponent,
    ClinicalTrialTagComponent,
    VariantTypeTagComponent,
    StatusTagComponent,
    EmptyRevisableComponent,
    AssertionPopoverComponent,
    ClinicalTrialPopoverComponent,
    DiseasePopoverComponent,
    DrugPopoverComponent,
    PhenotypePopoverComponent,
    SourcePopoverComponent,
    VariantTypePopoverComponent,
    CommentPopoverComponent,
    VariantgroupTagComponent,
    TagPileupComponent,
  ],
  imports: [
    CommonModule,
    CvcPipesModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    RouterModule,
    CvcLinkTagModule,
    CvcGeneTagModule,
    NzAlertModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzCommentModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzMenuModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzListModule,
    NzRadioModule,
    NzSpaceModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    TimeagoModule.forChild(),
    NgxJsonViewerModule,
    NzSkeletonModule,
    NzTimelineModule,
    NzDividerModule,
    NzAvatarModule,
    NzPopoverModule,
    GenesComponentsModule,
    FormlyNgZorroAntdModule,
    FormlyModule.forChild(),
    NzSelectModule,
    NzModalModule,
    NzSelectModule,
    NzPageHeaderModule,
    NzTableModule,
    NzAutocompleteModule,
    NzInputModule,
    NzSwitchModule,
    NzStatisticModule,
    NzImageModule,
    NzTabsModule,
    IconsProviderModule,
    NzBreadCrumbModule,
    NzEmptyModule,
    NzGridModule
  ],
  exports: [
    CommentAddComponent,
    CommentListComponent,
    FlaggableComponent,
    FlaggableOptionsDirective,
    FormButtonsComponent,
    FormErrorsAlertComponent,
    LifecycleActionsComponent,
    OrgSelectorBtnDirective,
    OrgSelectorBtnGroupComponent,
    ParticipantListComponent,
    EventFeedComponent,
    UserAvatarComponent,
    UserPopoverComponent,
    VariantsMenuComponent,
    FlagEntityComponent,
    FlagListComponent,
    ResolveFlagComponent,
    ClearableTextComponentFilter,
    QuicksearchComponent,
    UserCardComponent,
    EvidenceCardComponent,
    AssertionCardComponent,
    OrganizationCardComponent,
    OrganizationAvatarComponent,
    UserTagComponent,
    OrgTagComponent,
    RevisionTagComponent,
    EventTimelineComponent,
    CommentTagComponent,
    EvidenceTagComponent,
    AssertionTagComponent,
    FlagTagComponent,
    TagListComponent,
    OrgPopoverComponent,
    GenePopoverComponent,
    EvidencePopoverComponent,
    ContributorAvatarsComponent,
    ContributorStackComponent,
    DetailsNavigationComponent,
    MyVariantInfoComponent,
    EvidenceRatingComponent,
    VariantTagComponent,
    VariantPopoverComponent,
    DiseaseTagComponent,
    DrugTagComponent,
    PhenotypeTagComponent,
    ClinicalTrialTagComponent,
    VariantTypeTagComponent,
    StatusTagComponent,
    AssertionPopoverComponent,
    SourceTagComponent,
    EmptyRevisableComponent,
    ClinicalTrialPopoverComponent,
    DiseasePopoverComponent,
    DrugPopoverComponent,
    PhenotypePopoverComponent,
    SourcePopoverComponent,
    VariantTypePopoverComponent,
    VariantgroupTagComponent,
    TagPileupComponent,
  ]
})

export class SharedComponentsModule { }
