import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  CvcMolecularProfileSelectField,
  CvcMolecularProfileSelectFieldProps,
} from './molecular-profile-select.type'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms2/components/entity-select/entity-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { LetModule, PushModule } from '@ngrx/component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MpExpressionEditorComponent } from './mp-expression-editor/mp-expression-editor.component'
import { NzCardModule } from 'ng-zorro-antd/card';
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
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
})
export class CvcMolecularProfileSelectModule {}
