import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentPopoverComponent } from './comment-popover.component';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [CvcCommentPopoverComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzCardModule,
    NzGridModule,
    CvcGeneTagModule,
    CvcUserTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcRevisionTagModule,
    CvcSourceTagModule,
    TimeagoModule.forChild({
      formatter: { useClass: CivicTimeagoFormatter, provide: TimeagoFormatter },
    }),
  ],
  exports: [CvcCommentPopoverComponent],
})
export class CvcCommentPopoverModule {}
