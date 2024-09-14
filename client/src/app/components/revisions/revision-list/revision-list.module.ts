import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RevisionListComponent } from './revision-list.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzListModule } from 'ng-zorro-antd/list'
import { CvcRevisionValueDiffModule } from '../revision-value-diff/revision-value-diff.module'
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcCommentInputFormModule } from '@app/forms/components/comment-input/comment-input.module'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'

@NgModule({
  declarations: [RevisionListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    NzEmptyModule,
    NzCheckboxModule,
    NzDividerModule,
    NzToolTipModule,
    NzListModule,
    NzPopoverModule,
    NzIconModule,
    NzInputModule,
    NzDescriptionsModule,
    NzDividerModule,
    FormsModule,
    RevisionListDiffModule,
    CvcFeatureTagModule,
    CvcSourceTagModule,
    CvcRevisionValueDiffModule,
    CvcUserTagModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcPhenotypeTagModule,
    CvcFeatureVariantTagModule,
    CvcEvidenceTagModule,
    CvcVariantTypeTagModule,
    CvcStatusTagModule,
    CvcCommentInputFormModule,
    CvcMolecularProfileTagModule,
    CvcPipesModule,
    CvcCommentBodyModule,
    CvcOrganizationTagModule,
    NzCollapseModule,
    NzButtonModule,
    NzAlertModule,
    LetDirective,
    PushPipe,
  ],
  exports: [RevisionListComponent],
})
export class RevisionListModule {}
