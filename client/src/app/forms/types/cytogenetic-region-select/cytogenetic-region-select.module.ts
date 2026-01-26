import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEntitySelectModule } from '@app/forms/components/entity-select/entity-select.module'
import { CvcEntityTagModule } from '@app/forms/components/entity-tag/entity-tag.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  CvcCytogeneticRegionSelectField,
  CvcCytogeneticRegionSelectFieldConfig,
} from './cytogenetic-region-select.type'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzModalModule } from 'ng-zorro-antd/modal'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'cytogenetic-region-select',
      wrappers: ['form-field'],
      component: CvcCytogeneticRegionSelectField,
    },
    {
      name: 'cytogenetic-region-multi-select',
      wrappers: ['form-field'],
      component: CvcCytogeneticRegionSelectField,
      defaultOptions: <CvcCytogeneticRegionSelectFieldConfig>{
        props: {
          label: 'Regions',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcCytogeneticRegionSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild(typeConfig),
    NzAlertModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,
    NzFormModule,
    NzAutocompleteModule,
    NzTypographyModule,
    NzTagModule,
    NzSpaceModule,
    NzModalModule,
    CvcFormFieldWrapperModule,
    CvcEntitySelectModule,
    CvcPipesModule,
    CvcEntityTagModule,
  ],
  exports: [CvcCytogeneticRegionSelectField],
})
export class CvcCytogeneticRegionSelectModule {}
