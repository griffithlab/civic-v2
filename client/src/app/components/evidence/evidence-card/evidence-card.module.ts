import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';

import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcEvidenceCardComponent } from './evidence-card.component';
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module';

@NgModule({
  declarations: [CvcEvidenceCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzIconModule,
    CvcClinicalTrialTagModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcEvidenceRatingModule,
    CvcPhenotypeTagModule,
    CvcPipesModule,
  ],
  exports: [CvcEvidenceCardComponent]
})
export class CvcEvidenceCardModule { }
