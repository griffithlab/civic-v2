import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module'
import { CvcForms2Module } from '@app/forms2/forms2.module'
import { LetModule, PushModule } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NgxJsonViewerModule } from 'ngx-json-viewer' // debug
import { CvcEvidenceSubmitForm } from './evidence-submit.form'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'

@NgModule({
  declarations: [CvcEvidenceSubmitForm],
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    PushModule,
    NzButtonModule,
    NzAlertModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,
    CvcEvidenceTableModule,
    NgxJsonViewerModule, // debug
  ],
  exports: [CvcEvidenceSubmitForm],
})
export class CvcEvidenceSubmitFormModule {}
