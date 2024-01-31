import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcTagInputField, CvcTagInputProps } from './tag-input.type'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcStringTagModule } from '@app/forms/components/string-tag/string-tag.module'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'tag-input',
      wrappers: ['form-field'],
      component: CvcTagInputField,
      defaultOptions: {
        modelOptions: {
          // update model when focus leaves field
          // (template's keydown.enter listener blurs the field, updating the model)
          updateOn: 'blur',
        },
      },
    },
    {
      // for use in repeat-field types
      name: 'tag-multi-input',
      wrappers: ['form-field'],
      component: CvcTagInputField,
      defaultOptions: {
        props: <CvcTagInputProps>{
          isMultiInput: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcTagInputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild(typeConfig),
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule,
    CvcStringTagModule,
  ],
  exports: [CvcTagInputField],
})
export class CvcTagInputModule {}
