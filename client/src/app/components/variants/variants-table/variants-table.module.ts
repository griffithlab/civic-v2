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

    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcTagOverflowModule
  ],
  exports: [CvcVariantsTableComponent]
})
export class CvcVariantsTableModule { }
