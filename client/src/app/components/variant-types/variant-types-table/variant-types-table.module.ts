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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';

@NgModule({
  declarations: [CvcVariantTypesTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTypographyModule,
    NzToolTipModule,
    NzTagModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcPhenotypeTagModule,
    CvcLinkTagModule,
    CvcVariantTypeTagModule,
  ],
  exports: [CvcVariantTypesTableComponent]
})
export class CvcVariantTypesTableModule { }
