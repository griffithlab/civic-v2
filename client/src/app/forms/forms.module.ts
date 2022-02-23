import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormlyConfig } from '@app/forms/forms.config';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcFormInfoWrapperModule } from '@app/forms/shared/wrappers/form-info.module';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { CvcSubmitButtonTypeModule } from './shared/types/submit-button/submit-button.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forRoot(CvcFormlyConfig),
    FormlyNgZorroAntdModule,

    // type module imports
    CvcSubmitButtonTypeModule,

    // wrapper modules
    CvcFormInfoWrapperModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
  ]
})
export class CvcFormsModule { }
