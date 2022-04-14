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

import { CvcVariantsTableComponent } from './variants-table.component';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '../variant-tag/variant-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcPlainTagOverflowModule } from '@app/components/shared/plain-tag-overflow/plain-tag-overflow.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';

@NgModule({
  declarations: [CvcVariantsTableComponent],
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
    NzButtonModule,
    NzCardModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcTagOverflowModule,
    CvcPlainTagOverflowModule,
    CvcPipesModule,
    CvcClearableInputFilterModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
  ],
  exports: [CvcVariantsTableComponent]
})
export class CvcVariantsTableModule { }
