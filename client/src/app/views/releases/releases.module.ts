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

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from './releases.component';
import { ReleasesMainComponent } from './releases-main/releases-main.component';


@NgModule({
  declarations: [ReleasesComponent, ReleasesMainComponent],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
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
export class ReleasesModule { }
