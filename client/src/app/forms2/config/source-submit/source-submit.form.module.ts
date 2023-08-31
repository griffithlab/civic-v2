import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcSourceSubmitForm } from './source-submit.form'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms2/forms2.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module'
import { PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'

@NgModule({
  declarations: [CvcSourceSubmitForm],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    PushPipe,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,
    NgxJsonViewerModule, // debug
  ],
  exports: [CvcSourceSubmitForm],
})
export class CvcSourceSubmitFormModule {}
