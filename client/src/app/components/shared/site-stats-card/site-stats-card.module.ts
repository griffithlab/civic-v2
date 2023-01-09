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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    CvcSiteStatsCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveComponentModule,
    NzStatisticModule,
    NzGridModule,
    NzCardModule,
    NzRadioModule,
    NzButtonModule,
    NzSkeletonModule,
    NzTypographyModule,
    NzIconModule,
    NgxJsonViewerModule,
    CvcPipesModule,
  ],
  exports: [
    CvcSiteStatsCardComponent
  ]
})
export class CvcSiteStatsCardModule { }
