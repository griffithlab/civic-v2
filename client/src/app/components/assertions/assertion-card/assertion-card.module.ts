import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAssertionCardComponent } from './assertion-card.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';

@NgModule({
  declarations: [CvcAssertionCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzSpaceModule,
    NzGridModule,
    CvcDrugTagModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcPipesModule
  ],
  exports: [CvcAssertionCardComponent]
})
export class CvcAssertionCardModule { }
