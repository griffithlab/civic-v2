import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcBaseInputField, CvcBaseInputFieldProps } from './tag-input.type'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcStringTagModule } from '@app/forms/components/string-tag/string-tag.module'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'tag-input',
      wrappers: ['form-field'],
      component: CvcBaseInputField,
    },
    {
      // for use in repeat-field types
      name: 'tag-multi-input',
      wrappers: ['form-field'],
      component: CvcBaseInputField,
      defaultOptions: {
        props: <CvcBaseInputFieldProps>{
          isRepeatItem: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcBaseInputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    FormlyNzFormFieldModule, // for form-field wrapper
    NzInputModule,
    NzFormModule,
    CvcStringTagModule,
  ],
  exports: [CvcBaseInputField],
})
export class CvcBaseInputFieldModule {}
