import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CancelButtonComponent, CancelButtonType } from './cancel-button.type';

@NgModule({
  declarations: [
    CancelButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    RouterModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [CancelButtonType],
    }),
  ],
  exports: [
    CancelButtonComponent
  ]
})
export class CvcCancelButtonModule { }
