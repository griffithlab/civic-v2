import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'

import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { CvcQuicksearchModule } from '@app/components/layout/quicksearch/quicksearch.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcLoginButtonModule } from '@app/components/layout/login-button/login-button.module'
import { CvcViewerButtonModule } from '@app/components/layout/viewer-button/viewer-button.module'
import { PushPipe } from '@ngrx/component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    PushPipe,
    CvcLoginButtonModule,
    CvcViewerButtonModule,
    CvcQuicksearchModule,
  ],
})
export class LayoutModule {}
