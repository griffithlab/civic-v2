import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { CvcQuerySubfiltersField } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.type'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

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
  ],
})
export class CvcQuerySubfiltersModule {}
