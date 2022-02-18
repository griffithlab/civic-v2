import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFormInfoCardComponent } from './form-info-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    CvcFormInfoCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormlyModule,
    NzCardModule,
    NgxJsonViewerModule,
    NzCollapseModule,
    NzIconModule,
    NzToolTipModule,
  ],
  exports: [CvcFormInfoCardComponent]
})
export class CvcFormInfoCardModule { }
