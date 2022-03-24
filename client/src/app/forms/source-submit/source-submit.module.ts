import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import {
    NzAlertModule
} from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormErrorsAlertModule } from '../config/components/form-errors-alert/form-errors-alert.module';
import { SourceSubmitForm } from './source-submit.form';

@NgModule({
  declarations: [
    SourceSubmitForm
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSpinModule,
    NzFormModule,
    NzAlertModule,
    CvcFormErrorsAlertModule,

    NgxJsonViewerModule,
  ],
  exports: [
    SourceSubmitForm
  ]
})
export class SourceSubmitModule { }
