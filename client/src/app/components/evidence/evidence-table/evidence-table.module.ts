import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcTagOverflowModule } from '@app/components/shared/cvc-tag-overflow/cvc-tag-overflow.module';

import { CvcEvidenceTableComponent } from './evidence-table.component';
import { CvcGeneTagModule } from '@app/components/genes/cvc-gene-tag/cvc-gene-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcEvidenceTagModule } from '../evidence-tag/evidence-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
// import { CvcVariantTagModule } from '../variant-tag/variant-tag.module';

@NgModule({
  declarations: [CvcEvidenceTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule,
    NzSelectModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcEvidenceTagModule,
    CvcTagOverflowModule,
    CvcClearableInputFilterModule,
  ],
  exports: [CvcEvidenceTableComponent]
})
export class CvcEvidenceTableModule { }
