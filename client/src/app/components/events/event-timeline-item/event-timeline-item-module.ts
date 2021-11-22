import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEventTimelineItemComponent } from './event-timeline-item.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcCommentTagModule } from '@app/components/comments/comment-tag/comment-tag.module';
import { CvcFlagTagModule } from '@app/components/flags/flag-tag/flag-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';

@NgModule({
  declarations: [CvcEventTimelineItemComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzTypographyModule,
    NzGridModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    CvcRevisionTagModule,
    CvcUserTagModule,
    CvcPipesModule,
    CvcCommentTagModule,
    CvcFlagTagModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcOrganizationTagModule,
    CvcSourceTagModule
  ],
  exports: [CvcEventTimelineItemComponent]
})
export class CvcEventTimelineItemModule { }
