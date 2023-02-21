import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  CvcEvidenceSelectField,
  CvcEvidenceSelectFieldProps,
} from './evidence-select.type'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzIconModule } from 'ng-zorro-antd/icon'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'evidence-select',
      wrappers: ['form-field'],
      component: CvcEvidenceSelectField,
    },
    {
      name: 'evidence-multi-select',
      wrappers: ['form-field'],
      component: CvcEvidenceSelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcEvidenceSelectFieldProps>>>{
        props: {
          label: 'Evidence Items',
          isMultiSelect: true,
        },
      },
    },
  ],
}
@NgModule({
  declarations: [CvcEvidenceSelectField],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    FormlyModule.forChild(typeConfig),
    NzIconModule,
    NzGridModule,
    CvcPipesModule,
    CvcEntityTagModule,
    CvcEntitySelectModule,
  ],
  exports: [CvcEvidenceSelectField],
})
export class CvcEvidenceSelectFieldModule {}
