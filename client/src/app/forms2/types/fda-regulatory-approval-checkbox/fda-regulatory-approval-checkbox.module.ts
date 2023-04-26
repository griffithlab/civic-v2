import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcFdaRegulatoryApprovalCheckboxField } from './fda-regulatory-approval-checkbox.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'fda-regulatory-approval-checkbox',
      wrappers: ['form-field'],
      component: CvcFdaRegulatoryApprovalCheckboxField,
    },
  ],
}

@NgModule({
  declarations: [CvcFdaRegulatoryApprovalCheckboxField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
  ],
  exports: [CvcFdaRegulatoryApprovalCheckboxField]
})
export class CvcCvcFdaRegulatoryApprovalCheckboxFieldModule {}
