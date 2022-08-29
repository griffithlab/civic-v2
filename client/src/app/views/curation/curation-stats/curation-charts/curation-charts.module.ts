import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CurationChartsPage } from './curation-charts.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CurationChartsPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NgChartsModule,
  ]
})
export class CurationChartsModule { }
