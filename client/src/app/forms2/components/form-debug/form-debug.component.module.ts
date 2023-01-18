import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LetModule, PushModule } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { FormDebugFieldListComponent } from './form-debug-field-list/form-debug-field-list.component'
import { CvcFormDebugComponent } from './form-debug.component';
import { CvcFormStatusTagComponent } from './form-status-tag/form-status-tag.component'

@NgModule({
  declarations: [CvcFormDebugComponent, FormDebugFieldListComponent, CvcFormStatusTagComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzListModule,
    NzTagModule,
    NzTypographyModule,

    NgxJsonViewerModule,
  ],
  exports: [CvcFormDebugComponent],
})
export class CvcFormDebugComponentModule {}
