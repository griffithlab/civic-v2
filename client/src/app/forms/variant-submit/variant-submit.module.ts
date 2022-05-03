import { CommonModule } from '@angular/common';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CvcGeneArrayTypeModule } from '../config/types/gene-array/gene-array.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { VariantSubmitForm } from './variant-submit.form';
import { CvcSubmitButtonTypeModule } from '../config/types/submit-button/submit-button.module';

@NgModule({
  declarations: [VariantSubmitForm],
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
    NzCardModule,
    NzSpaceModule,
    NzTypographyModule,
    FormlyModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcFormInfoWrapperModule,
    CvcMultiFieldTypeModule,
    CvcTextareaBaseTypeModule,
    CvcCommentTextareaTypeModule,
    CvcGeneArrayTypeModule,
    CvcFormContainerWrapperModule,
    CvcCancelButtonModule,
    CvcSubmitButtonTypeModule,
    NgxJsonViewerModule,
  ],
  exports: [VariantSubmitForm],
})
export class VariantSubmitFormModule { }
