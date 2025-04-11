import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { CvcRegionVariantReviseForm } from './region-variant-revise.form'

@NgModule({
  declarations: [CvcRegionVariantReviseForm],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,

    NgxJsonViewerModule, // debug
  ],
  exports: [CvcRegionVariantReviseForm],
})
export class CvcRegionVariantReviseFormModule {}
