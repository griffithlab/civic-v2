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

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { GenesComponentsModule } from '../genes/genes-components.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { QuicksearchComponent } from './quicksearch/quicksearch-component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ContributorAvatarsComponent } from './contributor-avatars/contributor-avatars.component';
import { ContributorStackComponent } from './contributor-stack/contributor-stack.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DetailsNavigationComponent } from './details-navigation/details-navigation.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { StatusTagComponent } from './status-tag/status-tag.component';

import { EmptyRevisableComponent } from './empty-revisable/empty-revisable.component';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcLinkTagModule } from './link-tag/link-tag.module';
import { CvcGeneTagModule } from '../genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '../variants/variant-tag/variant-tag.module';
import { CvcEvidenceTagModule } from '../evidence/evidence-tag/evidence-tag.module';
import { CvcAssertionsTagModule } from '../assertions/assertions-tag/assertions-tag.module';
import { CvcClinicalTrialTagModule } from '../clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcSourceTagModule } from '../sources/source-tag/source-tag.module';
import { CvcDiseaseTagModule } from '../diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '../drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcPhenotypeTagModule } from '../phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcOrganizationTagModule } from '../organizations/organization-tag/organization-tag.module';
import { CvcTagListModule } from './tag-list/tag-list.module';
import { CvcMyVariantInfoModule } from '../variants/my-variant-info/my-variant-info.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { CvcUserTagModule } from '../users/user-tag/user-tag.module';
import { CvcCommentTagModule } from '../comments/comment-tag/comment-tag.module';
import { CvcUserPopoverModule } from '../users/user-popover/user-popover.module';
import { CvcFlagTagModule } from '../flags/flag-tag/flag-tag.module';

@NgModule({
  declarations: [
    QuicksearchComponent,
    ContributorAvatarsComponent,
    ContributorStackComponent,
    DetailsNavigationComponent,
    StatusTagComponent,
    EmptyRevisableComponent,
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
    CvcVariantTagModule,
    CvcEvidenceTagModule,
    CvcAssertionsTagModule,
    CvcClinicalTrialTagModule,
    CvcSourceTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcPhenotypeTagModule,
    CvcOrganizationTagModule,
    CvcTagListModule,
    CvcMyVariantInfoModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CvcUserTagModule,
    CvcCommentTagModule,
    CvcUserPopoverModule,
    CvcFlagTagModule,
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
    QuicksearchComponent,
    ContributorAvatarsComponent,
    ContributorStackComponent,
    DetailsNavigationComponent,
    StatusTagComponent,
    EmptyRevisableComponent,
  ]
})

export class SharedComponentsModule { }
