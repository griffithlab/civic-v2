import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcSiteStatsCardComponent } from './site-stats-card.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  declarations: [
    CvcSiteStatsCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzStatisticModule,
    NzGridModule,
    NzCardModule,
    NzRadioModule,
    NzButtonModule,
    NzSkeletonModule,
    NzTypographyModule,
    NgxJsonViewerModule,
  ],
  exports: [
    CvcSiteStatsCardComponent
  ]
})
export class CvcSiteStatsCardModule { }
