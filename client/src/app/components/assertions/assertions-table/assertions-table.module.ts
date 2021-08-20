import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';

import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcAssertionsTableComponent } from './assertions-table.component';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcAssertionsTagModule } from '../assertions-tag/assertions-tag.module';

@NgModule({
  declarations: [CvcAssertionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule,
    NzSelectModule,
    CvcClearableInputFilterModule,
    CvcPipesModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcClearableInputFilterModule,
  ],
  exports: [CvcAssertionsTableComponent]
})
export class CvcAssertionsTableModule { }
