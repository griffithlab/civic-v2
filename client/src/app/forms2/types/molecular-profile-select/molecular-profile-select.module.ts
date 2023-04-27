import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms2/components/form-submission-status-display/form-submission-status-display.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
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
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
    CvcMolecularProfileSelectField,
    CvcMolecularProfileSelectFieldProps
} from './molecular-profile-select.type'
import { MpExpressionEditorComponent } from './mp-expression-editor/mp-expression-editor.component'
import { MpFinderComponent } from './mp-finder/mp-finder.component'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'molecular-profile-select',
      wrappers: ['form-field'],
      component: CvcMolecularProfileSelectField,
    },
    {
      name: 'molecular-profile-multi-select',
      wrappers: ['form-field'],
      component: CvcMolecularProfileSelectField,
      defaultOptions: <
        Partial<FieldTypeConfig<CvcMolecularProfileSelectFieldProps>>
      >{
        props: {
          label: 'Molecular Profiles',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcMolecularProfileSelectField, MpExpressionEditorComponent, MpFinderComponent],
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
    NzToolTipModule,
    NzPopoverModule,
    CvcFormSubmissionStatusDisplayModule,
    CvcMolecularProfileTagNameModule,
    CvcFormFieldWrapperModule,
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
})
export class CvcMolecularProfileSelectModule {}
