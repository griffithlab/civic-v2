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

import { CvcEvidenceTableComponent } from './evidence-table.component';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcEvidenceTagModule } from '../evidence-tag/evidence-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [CvcEvidenceTableComponent],
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
    NzCheckboxModule,
    NzCardModule,
    NzTagModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcPipesModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcEvidenceTagModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcClearableInputFilterModule,
  ],
  exports: [CvcEvidenceTableComponent]
})
export class CvcEvidenceTableModule { }
