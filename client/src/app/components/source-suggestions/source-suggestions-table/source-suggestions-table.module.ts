import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSourceSuggestionsTableComponent } from './source-suggestions-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';

@NgModule({
  declarations: [CvcSourceSuggestionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzSelectModule,
    CvcClearableInputFilterModule,
    CvcUserTagModule,
    CvcSourceTagModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule
  ],
  exports: [CvcSourceSuggestionsTableComponent]
})
export class CvcSourceSuggestionsTableModule { }
