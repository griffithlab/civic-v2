import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormInfoPanelComponent } from './form-info-panel.component';

@NgModule({
  declarations: [CvcFormInfoPanelComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormlyModule,
    NzAffixModule,
    NzCollapseModule,
    NzIconModule,
    NzToolTipModule,
    NgxJsonViewerModule,
  ],
  exports: [CvcFormInfoPanelComponent]
})
export class CvcFormInfoPanelModule { }
