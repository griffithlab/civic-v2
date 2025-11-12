import { ConfigOption, FormlyField, FormlyModule } from '@ngx-formly/core'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcQueryFilterField } from '@app/forms/types/query-builder/query-filter/query-filter.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'query-filter',
      component: CvcQueryFilterField,
      defaultOptions: {},
    },
  ],
}

@NgModule({
  declarations: [CvcQueryFilterField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    FormlyField,
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class CvcQueryFilterModule {}
