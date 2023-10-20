import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms/components/entity-tag/entity-tag.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcDiseaseQuickAddForm } from './disease-quick-add/disease-quick-add.form'
import {
  CvcDiseaseSelectField,
  CvcDiseaseSelectFieldOptions,
} from './disease-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'disease-select',
      wrappers: ['form-field'],
      component: CvcDiseaseSelectField,
      defaultOptions: <CvcDiseaseSelectFieldOptions>{
        props: {
          label: 'Disease',
        },
      },
    },
    {
      name: 'disease-multi-select',
      wrappers: ['form-field'],
      component: CvcDiseaseSelectField,
      defaultOptions: <CvcDiseaseSelectFieldOptions>{
        props: {
          isMultiSelect: true,
          label: 'Diseases',
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcDiseaseSelectField, CvcDiseaseQuickAddForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild(typeConfig),
    NzAlertModule,
    NzButtonModule,
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
    NzTagModule,
    CvcFormSubmissionStatusDisplayModule,
    CvcFormFieldWrapperModule,
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
  exports: [CvcDiseaseSelectField, CvcDiseaseQuickAddForm],
})
export class CvcDiseaseSelectModule {}
