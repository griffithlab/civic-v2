import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTypesTableComponent } from './variant-types-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcVariantTypeTagModule } from '../variant-type-tag/variant-type-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcVariantTypesTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzTableModule,
    NzIconModule,
    CvcClearableInputFilterModule,
    CvcPhenotypeTagModule,
    CvcLinkTagModule,
    CvcVariantTypeTagModule,
  ],
  exports: [CvcVariantTypesTableComponent]
})
export class CvcVariantTypesTableModule { }
