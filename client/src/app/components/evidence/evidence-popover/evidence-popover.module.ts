import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEvidencePopoverComponent } from './evidence-popover.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcEvidenceRatingModule } from '../evidence-rating/evidence-rating.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'

@NgModule({
  declarations: [CvcEvidencePopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzSpaceModule,
    NzTypographyModule,
    NzToolTipModule,
    CvcTagListModule,
    CvcPipesModule,
    CvcAttributeTagModule,
    CvcEvidenceRatingModule,
    CvcTherapyTagModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcSourceTagModule,
    CvcStatusTagModule,
    CvcClinicalTrialTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
    CvcEmptyValueModule,
    CvcEntityChildCounts,
    NzSpinModule,
  ],
  exports: [CvcEvidencePopoverComponent],
})
export class CvcEvidencePopoverModule {}
