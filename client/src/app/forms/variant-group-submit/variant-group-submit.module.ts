import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupSubmitForm } from './variant-group-submit.form';
import { FormlyModule } from '@ngx-formly/core';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { CvcVariantInputTypeModule } from '../config/types/variant-input/variant-input.module';
import { CvcMultiFieldTypeModule } from '../config/types/multi-field/multi-field.module';
import { CvcMultiFieldAddBtnTypeModule } from '../config/types/multi-field/multi-field-add-btn/multi-field-add-btn.module';
import { CvcCommentTextareaTypeModule } from '../config/types/comment-textarea/comment-textarea.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcFormErrorsAlertModule } from '../config/components/form-errors-alert/form-errors-alert.module';
import { RouterModule } from '@angular/router';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
import { CvcSourceInputTypeModule } from '../config/types/source-input/source-input.module';
import { CvcVariantOriginSelectTypeModule } from '../config/types/variant-origin-select/variant-origin-select.module';
import { CvcOrgSubmitButtonTypeModule } from '../config/types/org-submit-button/org-submit-button.module';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';

@NgModule({
  declarations: [
    VariantGroupSubmitForm
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
    CvcOrgSubmitButtonTypeModule,
    CvcCancelButtonModule,
    NgxJsonViewerModule,
  ],
  exports: [
    VariantGroupSubmitForm
  ]
})
export class VariantGroupSubmitFormModule { }
