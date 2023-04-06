import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import {
  CvcReferenceBuildSelectField,
  CvcReferenceBuildSelectFieldProps,
} from './reference-build-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'reference-build-select',
      wrappers: ['form-field'],
      component: CvcReferenceBuildSelectField,
    },
    {
      name: 'reference-build-multi-select',
      wrappers: ['form-field'],
      component: CvcReferenceBuildSelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcReferenceBuildSelectFieldProps>>>{
        props: {
          label: 'Levels',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcReferenceBuildSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    NzTagModule,
    CvcPipesModule,
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
  ],
  exports: [CvcReferenceBuildSelectField],
})
export class CvcReferenceBuildSelectModule {}
