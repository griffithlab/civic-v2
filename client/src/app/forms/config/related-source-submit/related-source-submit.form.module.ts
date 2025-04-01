import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRelatedSourceSubmitForm } from './related-source-submit.form'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'

@NgModule({
  declarations: [CvcRelatedSourceSubmitForm],
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
  exports: [CvcRelatedSourceSubmitForm],
})
export class CvcRelatedSourceSubmitFormModule {}
