import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcFormFieldWrapperModule } from '../../wrappers/form-field/form-field.module';
import { BooleanSearchSelectType, BooleanSearchSelectTypeOption } from './boolean-search-select.type';

@NgModule({
  declarations: [BooleanSearchSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [BooleanSearchSelectTypeOption] }),
    NzSelectModule,
    NzInputModule,
    CvcFormFieldWrapperModule,
  ],
  exports: [BooleanSearchSelectType]
})
export class CvcBooleanSearchSelectTypeModule { }