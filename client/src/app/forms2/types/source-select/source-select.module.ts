import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  CvcSourceSelectField,
  CvcSourceSelectFieldProps,
} from './source-select.type';
import { SourceQuickAddForm } from './source-quick-add/source-quick-add.form'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'source-select',
      wrappers: ['form-field'],
      component: CvcSourceSelectField,
      defaultOptions: {
        props: {
          label: 'Source'
        }
      }
    },
    {
      // no label, for use in repeat-field types
      name: 'source-multi-select',
      wrappers: ['form-field'],
      component: CvcSourceSelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcSourceSelectFieldProps>>>{
        props: {
          label: 'Sources',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcSourceSelectField, SourceQuickAddForm],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    NzAlertModule,
    NzButtonModule,
    NzRadioModule,
    NzSelectModule,
    NzPopoverModule,
    NzModalModule,
    NzIconModule,
    NzInputModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule,
    NzFormModule,
    NzAutocompleteModule,
    NzTypographyModule,
    NzDividerModule,
    NzTagModule,
    CvcFormFieldWrapperModule,
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
  exports: [CvcSourceSelectField],
})
export class CvcSourceSelectModule {}
