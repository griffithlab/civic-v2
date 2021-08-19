import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesSummaryPage } from './genes-summary.page';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcVariantsMenuModule } from '@app/components/variants/variants-menu/variants-menu.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { CvcMyGeneInfoModule } from '@app/components/genes/my-gene-info/my-gene-info.module';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';

@NgModule({
  declarations: [GenesSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcLinkTagModule,
    CvcSourceTagModule,
    CvcStatusTagModule,
    CvcUserTagModule,
    CvcVariantsMenuModule,
    CvcEventFeedModule,
    CvcMyGeneInfoModule,
  ],
  exports: [GenesSummaryPage]
})
export class GenesSummaryModule { }
