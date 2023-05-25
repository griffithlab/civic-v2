import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { CvcCancelButton } from './cancel-button.type'
import { NzButtonModule } from 'ng-zorro-antd/button'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'cvc-cancel-button',
      component: CvcCancelButton,
    },
  ],
}

@NgModule({
  declarations: [CvcCancelButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzButtonModule,
  ],
  exports: [CvcCancelButton]
})
export class CvcCancelButtonModule {}
