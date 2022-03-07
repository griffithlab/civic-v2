import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from './releases.component';
import { ReleasesMainComponent } from './releases-main/releases-main.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [ReleasesComponent, ReleasesMainComponent],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
    IconsProviderModule,
    NzTableModule,
    NzTypographyModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzAlertModule,
    NzSpaceModule,
    NzCardModule,
    NzSpaceModule,
    CvcLinkTagModule
  ]
})
export class ReleasesModule { }
