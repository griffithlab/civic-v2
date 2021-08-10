import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDiseasesTableComponent } from './diseases-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcDiseaseTagModule } from '../cvc-disease-tag/cvc-disease-tag.module';

@NgModule({
  declarations: [CvcDiseasesTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTableModule,
    CvcClearableInputFilterModule,
    CvcLinkTagModule,
    CvcDiseaseTagModule,
  ],
  exports: [CvcDiseasesTableComponent]
})
export class CvcDiseasesTableModule { }
