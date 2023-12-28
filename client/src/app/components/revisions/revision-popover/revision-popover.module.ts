import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRevisionPopoverComponent } from './revision-popover.component'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'

@NgModule({
  declarations: [CvcRevisionPopoverComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzSpaceModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcFeatureTagModule,
    CvcUserTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcFeatureVariantTagModule,
    CvcVariantGroupTagModule,
    CvcStatusTagModule,
    CvcCommentBodyModule,
    RevisionListDiffModule,
  ],
  exports: [CvcRevisionPopoverComponent],
})
export class CvcRevisionPopoverModule {}
