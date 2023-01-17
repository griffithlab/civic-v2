import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRevisionPopoverComponent } from './revision-popover.component'
import { LetModule, PushModule } from '@ngrx/component'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcRevisionPopoverComponent],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzSpaceModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcGeneTagModule,
    CvcUserTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcVariantGroupTagModule,
    CvcStatusTagModule,
    RevisionListDiffModule,
  ],
  exports: [CvcRevisionPopoverComponent],
})
export class CvcRevisionPopoverModule {}
