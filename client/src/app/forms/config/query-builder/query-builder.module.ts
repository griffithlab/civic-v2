import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { NzFormModule } from 'ng-zorro-antd/form'

import { CvcForms2Module } from '@app/forms/forms.module'

import { CvcQueryBuilderForm } from './query-builder.form'
import { queryBuilderTypesConfig } from './types/query-builder-types.config'
import { CvcQuerySubfiltersField } from './types/query-subfilters/query-subfilters.type'

@NgModule({
  declarations: [CvcQueryBuilderForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    CvcForms2Module,
    FormlyModule.forChild(queryBuilderTypesConfig),
    CvcQuerySubfiltersField,
  ],
  exports: [CvcQueryBuilderForm],
})
export class CvcQueryBuilderModule {}
