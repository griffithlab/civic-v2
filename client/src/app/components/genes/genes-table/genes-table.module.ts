import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGenesTableComponent } from './genes-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { CvcPlainTagOverflowModule } from '@app/components/shared/plain-tag-overflow/plain-tag-overflow.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcGenesTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
    NzCardModule,
    NzButtonModule,
    NzToolTipModule,
    CvcGeneTagModule,
    CvcTagOverflowModule,
    CvcPlainTagOverflowModule
  ],
  exports: [CvcGenesTableComponent]
})
export class CvcGenesTableModule { }
