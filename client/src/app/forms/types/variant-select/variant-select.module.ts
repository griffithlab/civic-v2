import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcEntityCollectionTagModule } from '@app/forms/components/entity-collection-tag/entity-collection-tag.module'
import { CvcEntitySelectModule } from '@app/forms/components/entity-select/entity-select.module'
import { CvcEntityTagListModule } from '@app/forms/components/entity-tag-list/entity-tag-list.module'
import { CvcEntityTagModule } from '@app/forms/components/entity-tag/entity-tag.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { CvcTableCounts2Module } from '@app/forms/components/tables/table-counts/table-counts.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EnumFilterMenuComponent } from './variant-manager/enum-filter-menu/enum-filter-menu.component'
import { TableFilterInputComponent } from './variant-manager/table-filter-input/table-filter-input.component'
import { TableScrollerDirective } from './variant-manager/table-scroller.directive'
import { CvcVariantManagerComponent } from './variant-manager/variant-manager.component'
import { CvcVariantQuickAddForm } from './variant-quick-add/variant-quick-add.form'
import { CvcVariantSelectField } from './variant-select.type'
import { NzSpaceModule } from 'ng-zorro-antd/space'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'variant-select',
      wrappers: ['form-field'],
      component: CvcVariantSelectField,
    },
    {
      name: 'variant-multi-select',
      wrappers: ['form-field'],
      component: CvcVariantSelectField,
      defaultOptions: {
        props: {
          label: 'Variants',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [
    CvcVariantSelectField,
    CvcVariantManagerComponent,
    CvcVariantQuickAddForm,
    TableScrollerDirective,
    TableFilterInputComponent,
    EnumFilterMenuComponent,
  ],
  imports: [
    CommonModule,
    CvcEntitySelectModule,
    CvcEntityTagModule,
    CvcFormFieldWrapperModule,
    CvcFormSubmissionStatusDisplayModule,
    CvcPipesModule,
    CvcTableCounts2Module,
    CvcEntityTagListModule,
    CvcAttributeTagModule,
    CvcEntityCollectionTagModule,
    CvcEmptyValueModule,
    CvcNoMoreRowsModule,
    FormlyModule.forChild(typeConfig),
    FormsModule,
    LetDirective,
    NzAlertModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzModalModule,
    NzSelectModule,
    NzTypographyModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzPopoverModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NzModalModule,
    NzSpaceModule,
    PushPipe,
    ReactiveFormsModule,
  ],
  exports: [CvcVariantSelectField],
})
export class CvcVariantSelectModule {}
