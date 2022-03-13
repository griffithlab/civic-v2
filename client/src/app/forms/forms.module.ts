import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormlyConfig } from '@app/forms/forms.config';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormlyNgZorroAntdModule } from './config/ng-zorro-antd/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forRoot(CvcFormlyConfig),
    FormlyNgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
  ]
})
export class CvcFormsModule { }
