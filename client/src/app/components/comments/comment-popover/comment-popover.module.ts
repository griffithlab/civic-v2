import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcCommentPopoverComponent } from './comment-popover.component'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'

@NgModule({
  declarations: [CvcCommentPopoverComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    CvcFeatureTagModule,
    CvcUserTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcEvidenceTagModule,
    CvcFeatureVariantTagModule,
    CvcRevisionTagModule,
    CvcSourceTagModule,
    CvcPipesModule
  ],
  exports: [CvcCommentPopoverComponent],
})
export class CvcCommentPopoverModule {}
