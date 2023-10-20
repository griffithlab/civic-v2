import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFieldGridWrapper } from './field-grid.wrapper'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { NzGridModule } from 'ng-zorro-antd/grid'

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'field-grid', component: CvcFieldGridWrapper }],
}
@NgModule({
  declarations: [CvcFieldGridWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    FormlyModule.forChild(wrapperConfig),
  ],
})
export class CvcFieldGridWrapperModule {}
