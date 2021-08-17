import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsSummaryPage } from './variants-summary.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcMyVariantInfoModule } from '@app/components/variants/my-variant-info/my-variant-info.module';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/pipes/pipes.module';

@NgModule({
  declarations: [VariantsSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzGridModule,
    NzDescriptionsModule,
    NzCardModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
    CvcTagListModule,
    CvcSourceTagModule,
    CvcVariantTypeTagModule,
    CvcLinkTagModule,
    CvcMyVariantInfoModule,
    CvcEmptyRevisableModule,
    CvcEntityTableCardModule,
    CvcEventFeedModule,
  ],
  exports: [VariantsSummaryPage],
})
export class VariantsSummaryModule { }
