import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcForms2Module } from '@app/forms2/forms2.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LetDirective, PushPipe } from '@ngrx/component';
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module';
import { CvcVariantReviseForm } from './variant-revise.form';

@NgModule({
  declarations: [
    CvcVariantReviseForm
  ],
  imports: [
    CommonModule,
    LetDirective, PushPipe,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,

    NgxJsonViewerModule, // debug
  ],
  exports: [
    CvcVariantReviseForm
  ]
})
export class CvcVariantReviseFormModule { }
