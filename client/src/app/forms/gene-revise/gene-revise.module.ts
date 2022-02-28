import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneReviseForm } from './gene-revise.form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';

@NgModule({
  declarations: [GeneReviseForm],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    FormlyModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcCommentTextareaTypeModule,
    CvcMultiFieldTypeModule,
    CvcSourceInputTypeModule,
    CvcTextareaBaseTypeModule,
  ],
  exports: [GeneReviseForm]
})
export class GeneSuggestRevisionFormModule { }
