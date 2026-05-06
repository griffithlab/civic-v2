import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEnumSelectModule } from '@app/forms/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { ConfigOption, FieldTypeConfig, FormlyModule } from '@ngx-formly/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import {
  CvcRegionVariantNameSelectField,
  CvcRegionVariantNameSelectFieldProps,
} from './region-variant-name-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'region-variant-name-select',
      wrappers: ['form-field'],
      component: CvcRegionVariantNameSelectField,
    },
    {
      name: 'region-variant-name-multi-select',
      wrappers: ['form-field'],
      component: CvcRegionVariantNameSelectField,
      defaultOptions: <Partial<FieldTypeConfig<CvcRegionVariantNameSelectFieldProps>>>{
        props: {
          label: 'Levels',
          isMultiSelect: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcRegionVariantNameSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(typeConfig),
    NzTagModule,
    CvcPipesModule,
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
  ],
  exports: [CvcRegionVariantNameSelectField],
})
export class CvcRegionVariantNameSelectModule {}
