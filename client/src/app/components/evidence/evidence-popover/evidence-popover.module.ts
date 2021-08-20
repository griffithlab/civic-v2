import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEvidencePopoverComponent } from './evidence-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcPipesModule } from '@app/shared/pipes/pipes.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [CvcEvidencePopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcDrugTagModule,
    CvcDiseaseTagModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcPhenotypeTagModule,
    CvcSourceTagModule,
  ],
  exports: [CvcEvidencePopoverComponent]
})
export class CvcEvidencePopoverModule { }
