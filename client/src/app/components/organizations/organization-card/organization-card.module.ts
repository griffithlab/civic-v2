import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcOrganizationCardComponent } from './organization-card.component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcOrganizationAvatarModule } from '@app/components/organizations/organization-avatar/organization-avatar.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcOrganizationTagModule } from '../organization-tag/organization-tag.module'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { CvcStatsCardModule } from '@app/components/shared/stats-card/stats-card.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { FormsModule } from '@angular/forms'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module'

@NgModule({
  declarations: [CvcOrganizationCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzStatisticModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzCheckboxModule,

    CvcTagOverflowModule,
    CvcLinkTagModule,
    CvcClinicalTrialTagModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcEvidenceRatingModule,
    CvcPhenotypeTagModule,
    CvcOrganizationAvatarModule,
    CvcPipesModule,
    CvcOrganizationTagModule,
    CvcStatsCardModule,
    CvcTagListModule,
  ],
  exports: [CvcOrganizationCardComponent],
})
export class CvcOrganizationCardModule {}
