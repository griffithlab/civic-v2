import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module';
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcAssertionsTagModule } from '../assertions-tag/assertions-tag.module';
import { CvcAssertionsTableComponent } from './assertions-table.component';

@NgModule({
  declarations: [CvcAssertionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,

    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,

    CvcAssertionsTagModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcEvidenceTagModule,
    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcMolecularProfileTagModule,
  ],
  exports: [CvcAssertionsTableComponent]
})
export class CvcAssertionsTableModule { }
