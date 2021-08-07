import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesBrowseTableComponent } from './genes-browse-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [GenesBrowseTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzTypographyModule,
  ],
  exports: [GenesBrowseTableComponent]
})
export class GenesBrowseTableModule { }
