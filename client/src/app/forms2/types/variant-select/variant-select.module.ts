import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcVariantQuickAddForm } from './variant-quick-add/variant-quick-add.form'
import {
  CvcVariantSelectField,
  CvcVariantSelectFieldProps,
} from './variant-select.type'

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
      defaultOptions: <Partial<FieldTypeConfig<CvcVariantSelectFieldProps>>>{
        props: {
          label: 'Variants',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcVariantSelectField, CvcVariantQuickAddForm],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    FormlyModule.forChild(typeConfig),
    NzAlertModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzIconModule,
    NzInputModule,
    NzGridModule,
    NzSpaceModule,
    NzFormModule,
    NzAutocompleteModule,
    NzTypographyModule,

    CvcFormFieldWrapperModule,
    CvcFormSubmissionStatusDisplayModule,
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
  exports: [CvcVariantSelectField],
})
export class CvcVariantSelectModule {}
