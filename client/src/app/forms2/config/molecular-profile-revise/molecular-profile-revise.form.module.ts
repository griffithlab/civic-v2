import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcMolecularProfileReviseForm } from './molecular-profile-revise.form';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcForms2Module } from '@app/forms2/forms2.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module';

@NgModule({
  declarations: [
    CvcMolecularProfileReviseForm
  ],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,

    NgxJsonViewerModule, // debug
  ],
  exports: [
    CvcMolecularProfileReviseForm
  ]
})
export class CvcMolecularProfileReviseFormModule { }
