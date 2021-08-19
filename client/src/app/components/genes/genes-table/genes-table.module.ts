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

    CvcGeneTagModule,
    CvcTagOverflowModule
  ],
  exports: [CvcGenesTableComponent]
})
export class CvcGenesTableModule { }
