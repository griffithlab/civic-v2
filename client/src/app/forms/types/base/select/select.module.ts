import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { FormlySelectModule } from '@ngx-formly/core/select'

import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzSelectModule } from 'ng-zorro-antd/select'

import { CvcBaseSelectField, CvcBaseSelectFieldProps } from './select.type'

@NgModule({
  declarations: [CvcBaseSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,

    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'base-select',
          component: CvcBaseSelectField,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'select' },
        {
          name: 'base-multi-select',
          extends: 'level-select',
          defaultOptions: <Partial<FieldTypeConfig<CvcBaseSelectFieldProps>>>{
            props: {
              isMultiSelect: true,
            },
          },
        },
      ],
    }),
  ],
})
export class CvcBaseSelectModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CvcBaseSelectField } from './select.type';

// @NgModule({
//   declarations: [
//     CvcBaseSelectField
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class SelectModule { }
