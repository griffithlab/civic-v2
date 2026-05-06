import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcRegionReviseForm } from './region-revise.form';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcForms2Module } from '@app/forms/forms.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LetDirective, PushPipe } from '@ngrx/component';
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module';

@NgModule({
  declarations: [
    CvcRegionReviseForm
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
    CvcRegionReviseForm
  ]
})
export class CvcRegionReviseFormModule { }
