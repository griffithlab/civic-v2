import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCountsComponent } from './table-counts.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [TableCountsComponent],
  imports: [
    CommonModule,
    NzTypographyModule
  ],
  exports: [TableCountsComponent]
})
export class CvcTableCountsModule { }
