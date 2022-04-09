import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDiseasesTableComponent } from './diseases-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcDiseaseTagModule } from '../cvc-disease-tag/cvc-disease-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [CvcDiseasesTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzToolTipModule,
    NzTableModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    CvcClearableInputFilterModule,
    CvcLinkTagModule,
    CvcDiseaseTagModule,
  ],
  exports: [CvcDiseasesTableComponent]
})
export class CvcDiseasesTableModule { }
