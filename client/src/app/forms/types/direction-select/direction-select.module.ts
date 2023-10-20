import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  ReactiveFormsModule,
} from '@angular/forms'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import {
  CvcDirectionSelectField,
} from './direction-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'direction-select',
      wrappers: ['form-field'],
      component: CvcDirectionSelectField,
    },
  ],
}

@NgModule({
  declarations: [CvcDirectionSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcDirectionSelectField],
})
export class CvcDirectionSelectModule {}
