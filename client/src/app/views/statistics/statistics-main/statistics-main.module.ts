import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsMainComponent } from './statistics-main.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [StatisticsMainComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
  ]
})
export class StatisticsMainModule { }
