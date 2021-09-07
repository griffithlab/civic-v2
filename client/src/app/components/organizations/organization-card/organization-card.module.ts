import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationCardComponent } from './organization-card.component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcOrganizationAvatarModule } from '@app/components/organizations/organization-avatar/organization-avatar.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  declarations: [CvcOrganizationCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzStatisticModule,
    CvcClinicalTrialTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcEvidenceRatingModule,
    CvcPhenotypeTagModule,
    CvcOrganizationAvatarModule,
    CvcPipesModule,
  ],
  exports: [CvcOrganizationCardComponent]
})
export class CvcOrganizationCardModule { }
