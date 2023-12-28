import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcCommentBodyComponent } from './comment-body.component'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'

@NgModule({
  declarations: [CvcCommentBodyComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    //TODO - resolve circular dependency so we can use this
    //CvcRevisionTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcVariantGroupTagModule,
    CvcFeatureTagModule,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcMolecularProfileTagModule,
    CvcFeatureVariantTagModule
  ],
  exports: [CvcCommentBodyComponent],
})
export class CvcCommentBodyModule {}
