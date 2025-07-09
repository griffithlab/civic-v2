import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEntitySelectModule } from '@app/forms/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms/components/entity-tag/entity-tag.module'
import { CvcTableCounts2Module } from '@app/forms/components/tables/table-counts/table-counts.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberLegacyModule } from 'ng-zorro-antd/input-number-legacy'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcEvidenceManagerComponent } from './evidence-manager/evidence-manager.component'
import { TableScrollerDirective } from './evidence-manager/table-scroller.directive'
import {
  CvcEvidenceSelectField,
  CvcEvidenceSelectFieldProps,
} from './evidence-select.type'
import { TableFilterInputComponent } from './evidence-manager/table-filter-input/table-filter-input.component'
import { EnumFilterMenuComponent } from './evidence-manager/enum-filter-menu/enum-filter-menu.component'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcEntityTagListModule } from '@app/forms/components/entity-tag-list/entity-tag-list.module'
import { CvcEntityCollectionTagModule } from '@app/forms/components/entity-collection-tag/entity-collection-tag.module'
import { NzSpaceCompactComponent } from 'ng-zorro-antd/space'

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
  declarations: [
    CvcEvidenceSelectField,
    CvcEvidenceManagerComponent,
    TableScrollerDirective,
    TableFilterInputComponent,
    EnumFilterMenuComponent,
  ],
  imports: [
    CommonModule,
    CvcAttributeTagModule,
    CvcEmptyValueModule,
    CvcEntityCollectionTagModule,
    CvcEntitySelectModule,
    CvcEntityTagListModule,
    CvcEntityTagModule,
    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcTableCounts2Module,
    FormlyModule.forChild(typeConfig),
    FormsModule,
    LetDirective,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberLegacyModule,
    NzPopoverModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    PushPipe,
    NzSpaceCompactComponent,
  ],
  exports: [CvcEvidenceSelectField],
})
export class CvcEvidenceSelectFieldModule {}
