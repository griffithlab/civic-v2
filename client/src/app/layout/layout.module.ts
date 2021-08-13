import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { IconsProviderModule } from '@app/icons-provider.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { LayoutComponentsModule } from '@app/components/layout/layout-components.module';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcQuicksearchModule } from '@app/components/layout/quicksearch/quicksearch.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IconsProviderModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzPopoverModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    IconsProviderModule,
    LayoutComponentsModule,
    SharedComponentsModule,
    CvcQuicksearchModule,
  ]
})

export class LayoutModule { }
