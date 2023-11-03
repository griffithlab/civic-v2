import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEnumSelectModule } from '@app/forms/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  CvcAmpCategorySelectField,
  CvcAmpCategorySelectFieldProps,
} from './amp-category-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'amp-category-select',
      wrappers: ['form-field'],
      component: CvcAmpCategorySelectField,
    },
    {
      name: 'amp-category-multi-select',
      wrappers: ['form-field'],
      component: CvcAmpCategorySelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcAmpCategorySelectFieldProps>>>{
        props: {
          label: 'AMP/ASCO/CAP Categories',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcAmpCategorySelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    NzTagModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
  ],
  exports: [CvcAmpCategorySelectField],
})
export class CvcAmpCategorySelectModule {}
