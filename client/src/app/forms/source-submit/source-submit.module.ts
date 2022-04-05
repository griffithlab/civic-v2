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
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';
import { CvcCommentTextareaTypeModule } from '../config/types/comment-textarea/comment-textarea.module';
import { CvcDiseaseArrayTypeModule } from '../config/types/disease-array/disease-array.module';
import { CvcGeneArrayTypeModule } from '../config/types/gene-array/gene-array.module';
import { CvcSourceArrayTypeModule } from '../config/types/source-array/source-array.module';
import { CvcSubmitButtonTypeModule } from '../config/types/submit-button/submit-button.module';
import { CvcVariantArrayTypeModule } from '../config/types/variant-array/variant-array.module';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
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
    CvcFormContainerWrapperModule,
    CvcFormErrorsAlertModule,
    CvcGeneArrayTypeModule,
    CvcVariantArrayTypeModule,
    CvcDiseaseArrayTypeModule,
    CvcSourceArrayTypeModule,
    CvcCommentTextareaTypeModule,
    CvcSubmitButtonTypeModule,
    CvcCancelButtonModule,
    NgxJsonViewerModule,
  ],
  exports: [
    SourceSubmitForm
  ]
})
export class CvcSourceSubmitFormModule { }
