import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFormInfoCardComponent } from './form-info-card.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAffixModule } from 'ng-zorro-antd/affix'
import { FormlyModule } from '@ngx-formly/core'
import { CvcFormInfoPanelModule } from './form-info-panel/form-info-panel.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

@NgModule({
  declarations: [CvcFormInfoCardComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    FormlyModule,
    NzCardModule,
    NzAffixModule,
    NzCollapseModule,
    NzIconModule,
    NzToolTipModule,
    CvcFormInfoPanelModule,
    NgxJsonViewerModule,
  ],
  exports: [CvcFormInfoCardComponent],
})
export class CvcFormInfoCardModule {}
