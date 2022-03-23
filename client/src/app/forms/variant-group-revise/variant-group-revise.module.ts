import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupReviseForm } from './variant-group-revise.form';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormErrorsAlertModule } from '../config/components/form-errors-alert/form-errors-alert.module';
import { CvcCommentTextareaTypeModule } from '../config/types/comment-textarea/comment-textarea.module';
import { CvcMultiFieldAddBtnTypeModule } from '../config/types/multi-field/multi-field-add-btn/multi-field-add-btn.module';
import { CvcMultiFieldTypeModule } from '../config/types/multi-field/multi-field.module';
import { CvcSourceInputTypeModule } from '../config/types/source-input/source-input.module';
import { CvcSubmitButtonTypeModule } from '../config/types/submit-button/submit-button.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { CvcVariantInputTypeModule } from '../config/types/variant-input/variant-input.module';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';



@NgModule({
  declarations: [
    VariantGroupReviseForm
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormlyModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    FormlyModule,
    CvcTextareaBaseTypeModule,
    CvcVariantInputTypeModule,
    CvcMultiFieldTypeModule,
    CvcMultiFieldAddBtnTypeModule,
    CvcCommentTextareaTypeModule,
    CvcFormErrorsAlertModule,
    CvcFormContainerWrapperModule,
    CvcSourceInputTypeModule,
    CvcVariantInputTypeModule,
    CvcSubmitButtonTypeModule,
    NgxJsonViewerModule,
  ],
  exports: [VariantGroupReviseForm]
})
export class VariantGroupReviseModule { }
