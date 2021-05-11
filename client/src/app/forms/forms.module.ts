import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { GeneSuggestRevisionFormComponent } from './components/gene-suggest-revision-form/gene-suggest-revision-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { CommentFieldComponent } from './fields/comment-field/comment-field.component';

export function minlengthValidationMessage(err: any, field: any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

@NgModule({
  declarations: [GeneSuggestRevisionFormComponent, CommentFieldComponent],
  imports: [
    FormsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    CommonModule,
    NzButtonModule,
    NzAlertModule,
    NzFormModule,
    NzInputModule,
    NzListModule,
    NzSpaceModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    RouterModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'minlength', message: minlengthValidationMessage },
      ],
      extras: { lazyRender: true }
    }),
    FormlyNgZorroAntdModule,
  ],
  exports: [GeneSuggestRevisionFormComponent, CommentFieldComponent]
})
export class CvcFormsModule { }
