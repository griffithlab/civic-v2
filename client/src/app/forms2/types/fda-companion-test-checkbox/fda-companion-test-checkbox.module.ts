import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcFdaCompanionTestCheckboxField } from './fda-companion-test-checkbox.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'fda-companion-test-checkbox',
      wrappers: ['form-field'],
      component: CvcFdaCompanionTestCheckboxField,
    },
  ],
}

@NgModule({
  declarations: [CvcFdaCompanionTestCheckboxField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
  ],
  exports: [CvcFdaCompanionTestCheckboxField]
})
export class CvcCvcFdaCompanionTestCheckboxFieldModule {}
