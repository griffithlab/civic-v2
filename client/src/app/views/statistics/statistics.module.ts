import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { StatisticsMainComponent } from './statistics-main/statistics-main.component';


@NgModule({
  declarations: [StatisticsComponent, StatisticsMainComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    IconsProviderModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule
  ]
})
export class StatisticsModule { }
