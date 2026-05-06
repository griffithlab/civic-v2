import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  ReactiveFormsModule,
} from '@angular/forms'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
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
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcSignificanceSelectField],
})
export class CvcSignificanceSelectModule {}
