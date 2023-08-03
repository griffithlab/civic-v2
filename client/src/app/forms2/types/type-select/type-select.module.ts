import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEntityTypeSelectField } from './type-select.type'
import { ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { CvcAttributeTagModule } from '@app/forms2/components/attribute-tag/attribute-tag.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'type-select',
      wrappers: ['form-field'],
      component: CvcEntityTypeSelectField,
    },
  ],
}

@NgModule({
  declarations: [CvcEntityTypeSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
    CvcAttributeTagModule,
    CvcEnumSelectModule,
  ],
  exports: [CvcEntityTypeSelectField],
})
export class CvcEntityTypeSelectModule {}
