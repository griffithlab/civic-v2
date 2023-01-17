import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormCardWrapper } from './form-card.wrapper'
import { ReactiveFormsModule } from '@angular/forms'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { FormCardDirective } from './form-card.directive'
import { NgxJsonViewerModule } from 'ngx-json-viewer'

const configOption: ConfigOption = {
  wrappers: [
    {
      name: 'form-card',
      component: FormCardWrapper,
    },
  ],
}

@NgModule({
  declarations: [FormCardWrapper, FormCardDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCardModule,
    NzIconModule,
    NzToolTipModule,
    FormlyModule.forChild(configOption),
    NgxJsonViewerModule,
  ],
  exports: [FormCardDirective],
})
export class CvcFormCardModule {}
