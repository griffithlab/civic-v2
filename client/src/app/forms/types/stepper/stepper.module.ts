import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcFieldStepper } from './stepper.type'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzStepsModule } from 'ng-zorro-antd/steps';

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'cvc-field-stepper',
      component: CvcFieldStepper,
    },
  ],
}

@NgModule({
  declarations: [CvcFieldStepper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzButtonModule,
    NzDividerModule,
    NzStepsModule
  ],
  exports: [CvcFieldStepper]
})
export class CvcFieldStepperModule {}
