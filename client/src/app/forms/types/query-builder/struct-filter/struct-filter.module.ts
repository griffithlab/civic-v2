import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcStructFilterField } from './struct-filter.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'struct-filter',
      component: CvcStructFilterField,
      defaultOptions: {},
    },
  ],
}

@NgModule({
  declarations: [CvcStructFilterField],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild(typeConfig),
    NzFormModule,
    NzGridModule,
  ],
})
export class CvcStructFilterModule {}
