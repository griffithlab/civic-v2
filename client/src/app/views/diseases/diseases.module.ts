import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseasesRoutingModule } from './diseases-routing.module';
import { DiseasesComponent } from './diseases.component';
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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { EvidenceModule } from '../evidence/evidence.module';
import { SourcesRoutingModule } from '../sources/sources-routing.module';
import { VariantsRoutingModule } from '../variants/variants-routing.module';
import { DiseasesSummaryComponent } from './diseases-summary/diseases-summary.component';
import { DiseasesDetailComponent } from './diseases-detail/diseases-detail.component';
import { DiseasesHomeModule } from './diseases-home/diseases-home.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';

@NgModule({
  declarations: [
    DiseasesComponent,
    DiseasesSummaryComponent,
    DiseasesDetailComponent,
  ],
  imports: [
    DiseasesRoutingModule,
    DiseasesHomeModule,
    CvcAssertionsTableModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    CvcLinkTagModule,
    CommonModule,
    SourcesRoutingModule,

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
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    NzInputModule,
    FormsModule,

    EvidenceModule,

    NzSelectModule,
  ],
  exports: [
    DiseasesSummaryComponent,
    DiseasesDetailComponent,
  ],
})
export class DiseasesModule {}
