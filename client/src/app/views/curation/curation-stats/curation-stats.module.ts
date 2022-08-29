import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationStatsView } from './curation-stats.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CurationStatsRoutingModule } from './curation-stats-routing.module';
import { CurationChartsModule } from './curation-charts/curation-charts.module';

@NgModule({
  declarations: [CurationStatsView],
  imports: [
    CommonModule,
    CurationStatsRoutingModule,
    CurationChartsModule,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
  ]
})
export class CurationStatsModule { }
