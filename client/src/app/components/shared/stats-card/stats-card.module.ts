import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcStatsCardComponent } from './stats-card.component';

@NgModule({
  declarations: [CvcStatsCardComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzStatisticModule,
    NzTypographyModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
    CvcPipesModule,
  ],
  exports: [CvcStatsCardComponent],
})
export class CvcStatsCardModule {}
