import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { NzFormModule } from 'ng-zorro-antd/form'

import { CvcForms2Module } from '@app/forms/forms.module'

import { CvcQueryBuilderForm } from './query-builder.form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NgxJsonTreeviewComponent } from 'ngx-json-treeview'

@NgModule({
  declarations: [CvcQueryBuilderForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NzFormModule,
    NzGridModule,
    CvcForms2Module,
    NgxJsonTreeviewComponent,
  ],
  exports: [CvcQueryBuilderForm],
})
export class CvcQueryBuilderModule {}
