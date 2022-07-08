import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCountsComponent } from './table-counts.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [TableCountsComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTypographyModule
  ],
  exports: [TableCountsComponent]
})
export class CvcTableCountsModule { }
