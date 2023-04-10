import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  ReactiveFormsModule,
} from '@angular/forms'
import { CvcAttributeTagModule } from '@app/forms2/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core'
import { CvcSignificanceSelectField } from './significance-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'significance-select',
      wrappers: ['form-field'],
      component: CvcSignificanceSelectField,
    },
  ],
}

@NgModule({
  declarations: [CvcSignificanceSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcSignificanceSelectField],
})
export class CvcSignificanceSelectModule {}
