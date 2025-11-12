import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { CvcQuerySubfiltersField } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.type'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'query-subfilters',
      component: CvcQuerySubfiltersField,
      defaultOptions: {
        props: {
          label: 'Query Subfilter Repeater',
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcQuerySubfiltersField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
  ],
})
export class CvcQuerySubfiltersModule {}
