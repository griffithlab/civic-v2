import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

import { CvcCommentAddForm } from './comment-add.form';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommentTextareaModule } from '../../types/comment-textarea/comment-textarea.module';

@NgModule({
  declarations: [CvcCommentAddForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    FormlyModule.forChild(),
    CvcFormErrorsAlertModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CommentTextareaModule,
  ],
  exports: [CvcCommentAddForm]
})
export class CvcCommentAddModule { }
