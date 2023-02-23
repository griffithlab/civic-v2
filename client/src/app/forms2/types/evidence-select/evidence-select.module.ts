import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'
import { CvcEvidenceManagerComponent } from './evidence-manager/evidence-manager.component'
import { TableScrollerDirective } from './evidence-manager/table-scroller.directive'
import {
  CvcEvidenceSelectField,
  CvcEvidenceSelectFieldProps,
} from './evidence-select.type'

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
  declarations: [CvcEvidenceSelectField, CvcEvidenceManagerComponent, TableScrollerDirective],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    FormlyModule.forChild(typeConfig),

    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzCardModule,

    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcEntityTagModule,
    CvcEntitySelectModule,
  ],
  exports: [CvcEvidenceSelectField],
})
export class CvcEvidenceSelectFieldModule {}
