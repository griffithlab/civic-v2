import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { variantOriginSelectorTypeOption } from './variant-origin-selector.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [variantOriginSelectorTypeOption] }),
    NzSelectModule,
  ]
})
export class CvcVariantOriginSelectorTypeModule { }
