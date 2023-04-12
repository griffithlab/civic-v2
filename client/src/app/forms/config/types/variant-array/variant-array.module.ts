import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcVariantInputTypeModule } from '../variant-input/variant-input.module'
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module'
import { variantArrayTypeOption } from './variant-array.type'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [variantArrayTypeOption] }),
    CvcVariantInputTypeModule,
    CvcMultiFieldTypeModule,
  ],
})
export class CvcVariantArrayTypeModule {}
