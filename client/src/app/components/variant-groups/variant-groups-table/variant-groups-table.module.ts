import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantGroupsTableComponent } from './variant-groups-table.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { CvcVariantGroupTagModule } from '../variant-group-tag/variant-group-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';

@NgModule({
  declarations: [CvcVariantGroupsTableComponent],
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
    NzIconModule,
    NzCardModule,
    NzTypographyModule,
    NzTagModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
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
    CvcVariantGroupTagModule
  ],
  exports: [CvcVariantGroupsTableComponent]
})
export class CvcVariantGroupsTableModule { }
