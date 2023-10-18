import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { CvcNccnGuidelineVersionField } from './nccn-guideline-version-input.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'nccn-guideline-version-input',
      component: CvcNccnGuidelineVersionField,
      wrappers: ['form-field'],
    },
  ],
}

@NgModule({
  declarations: [CvcNccnGuidelineVersionField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzInputModule,
    CvcFormFieldWrapperModule,
  ],
  exports: [CvcNccnGuidelineVersionField]
})
export class CvcNccnGuidelineVersionFieldModule {}
