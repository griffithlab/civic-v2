import { CommonModule } from '@angular/common';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { EvidenceSubmitForm } from './evidence-submit.form';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcGeneInputTypeModule } from '../config/types/gene-input/gene-input.module';
import { CvcGeneArrayTypeModule } from '../config/types/gene-array/gene-array.module';

@NgModule({
  declarations: [EvidenceSubmitForm],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    FormlyModule,

    CvcFormErrorsAlertModule,
    CvcGeneInputTypeModule,
    CvcGeneArrayTypeModule,
  ],
  exports: [EvidenceSubmitForm],
})
export class EvidenceSubmitFormModule { }
