import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsRoutingModule } from './variant-groups-routing.module';
import { VariantGroupsComponent } from './variant-groups.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
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
import { SourcesRoutingModule } from '../sources/sources-routing.module';
import { VariantsRoutingModule } from '../variants/variants-routing.module';
import { VariantGroupsDetailComponent } from './variant-groups-detail/variant-groups-detail.component';
import { VariantGroupsSummaryComponent } from './variant-groups-summary/variant-groups-summary.component';
import { VariantGroupsCommentsComponent } from './variant-groups-comments/variant-groups-comments.component';
import { VariantGroupsRevisionsComponent } from './variant-groups-revisions/variant-groups-revisions.component';
import { VariantGroupsFlagsComponent } from './variant-groups-flags/variant-groups-flags.component';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { VariantGroupsHomeModule } from './variant-groups-home/variant-groups-home.module';

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
    VariantGroupsHomeModule,
    SectionNavigationModule,
    VariantGroupsRoutingModule,
    CommonModule,
    SourcesRoutingModule,
    SharedComponentsModule,
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
    SharedComponentsModule,
    EvidenceModule,
    SharedComponentsModule,
    NzSelectModule,
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
