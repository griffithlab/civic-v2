import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcStatsCardComponent } from './stats-card.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    CvcStatsCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzStatisticModule,
    NzTypographyModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
  ],
  exports: [
    CvcStatsCardComponent
  ]
})
export class CvcStatsCardModule { }
