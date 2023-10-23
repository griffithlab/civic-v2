import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import {
  CvcOriginSelectField,
  CvcOriginSelectFieldProps,
} from './origin-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'origin-select',
      wrappers: ['form-field'],
      component: CvcOriginSelectField,
    },
    {
      name: 'origin-multi-select',
      wrappers: ['form-field'],
      component: CvcOriginSelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcOriginSelectFieldProps>>>{
        props: {
          label: 'Variant Origins',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcOriginSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcOriginSelectField],
})
export class CvcOriginSelectModule {}
