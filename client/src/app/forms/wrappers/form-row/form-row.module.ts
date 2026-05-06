import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFormRowWrapper } from './form-row.wrapper'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { NzGridModule } from 'ng-zorro-antd/grid'

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-row', component: CvcFormRowWrapper }],
}
@NgModule({
  declarations: [CvcFormRowWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    FormlyModule.forChild(wrapperConfig),
  ],
})
export class CvcFormRowWrapperModule {}
