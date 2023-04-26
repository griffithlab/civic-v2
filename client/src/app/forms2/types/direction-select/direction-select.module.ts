import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  ReactiveFormsModule,
} from '@angular/forms'
import { CvcAttributeTagModule } from '@app/forms2/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
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
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcDirectionSelectField],
})
export class CvcDirectionSelectModule {}
