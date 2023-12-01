import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcFormFieldWrapper } from './form-field.wrapper'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-field', component: CvcFormFieldWrapper }],
}
@NgModule({
  declarations: [CvcFormFieldWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzToolTipModule,
    NzTypographyModule,
    FormlyModule.forChild(wrapperConfig),
  ],
})
export class CvcFormFieldWrapperModule {}
