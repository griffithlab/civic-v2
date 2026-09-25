import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcFieldStepper } from './stepper.type'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    NzGridModule,
    NzStepsModule,
    NzTagModule,
    NzSpaceModule,
    NzIconModule,
  ],
  exports: [CvcFieldStepper]
})
export class CvcFieldStepperModule {}
