import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module'
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EvidenceSummaryPage } from './evidence-summary.page'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'

@NgModule({
  declarations: [EvidenceSummaryPage],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzPopoverModule,
    CvcEmptyValueModule,
    CvcPipesModule,
    CvcEvidenceRatingModule,
    CvcDiseaseTagModule,
    CvcStatusTagModule,
    CvcTagListModule,
    CvcUserTagModule,
    CvcClinicalTrialTagModule,
    CvcSourceTagModule,
    CvcPhenotypeTagModule,
    CvcTherapyTagModule,
    CvcAssertionsTableModule,
    CvcAttributeTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
    CvcCommentBodyModule,
  ],
})
export class EvidenceSummaryModule {}
