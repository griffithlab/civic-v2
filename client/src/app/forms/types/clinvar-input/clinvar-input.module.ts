import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcStringTagModule } from '@app/forms/components/string-tag/string-tag.module'
import { CvcClinvarInputField, CvcClinvarInputFieldProps } from './clinvar-input.type'
import { NzSelectModule } from 'ng-zorro-antd/select'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'clinvar-input',
      wrappers: ['form-field'],
      component: CvcClinvarInputField,
    },
    {
      // for use in repeat-field types
      name: 'clinvar-multi-input',
      wrappers: ['form-field'],
      component: CvcClinvarInputField,
      defaultOptions: {
        props: <CvcClinvarInputFieldProps>{
          isRepeatItem: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcClinvarInputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    FormlyNzFormFieldModule, // for form-field wrapper
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    CvcStringTagModule,
  ],
  exports: [CvcClinvarInputField],
})
export class CvcClinvarInputFieldModule {}
