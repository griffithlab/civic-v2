import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantgroupSubmitForm } from './variantgroup-submit.form'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [CvcVariantgroupSubmitForm],
  imports: [
    CommonModule,
    RouterModule,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    NgxJsonViewerModule, // debug
    CvcFormSubmissionStatusDisplayModule,
  ],
  exports: [CvcVariantgroupSubmitForm],
})
export class CvcVariantgroupSubmitFormModule {}
