import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CurationChartsPage } from './curation-charts.page';
import { NgChartsModule } from 'ng2-charts';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [CurationChartsPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NgChartsModule,
    NzTypographyModule,
    NzStatisticModule,
    NgxChartsModule,
  ]
})
export class CurationChartsModule { }
