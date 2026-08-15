import { NgModule } from '@angular/core'
import { CvcDiseaseSelectField } from '@app/forms/types/disease-select/disease-select.type'
import { CvcPhenotypeSelectField } from '@app/forms/types/phenotype-select/phenotype-select.type'
import { CvcVariantTypeSelectField } from '@app/forms/types/variant-type-select/variant-type-select.type'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'

/**
 * The single FormlyModule.forChild registration for migrated select fields.
 * Imported by types/form-types.module.ts; each field's old per-type NgModule is
 * removed from that module in the same commit, so no type name is ever bound to
 * two components. Never re-provide FormlyConfig via forRoot in a lazy injector —
 * it silently breaks FieldArrayType.onPopulate (see forms.module.ts).
 */
const selectFieldTypes: ConfigOption = {
  types: [
    {
      name: 'disease-select',
      wrappers: ['form-field'],
      component: CvcDiseaseSelectField,
      defaultOptions: { props: { label: 'Disease' } },
    },
    {
      name: 'disease-multi-select',
      wrappers: ['form-field'],
      component: CvcDiseaseSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Diseases' },
      },
    },
    {
      name: 'phenotype-select',
      wrappers: ['form-field'],
      component: CvcPhenotypeSelectField,
      defaultOptions: { props: { label: 'Phenotype' } },
    },
    {
      name: 'phenotype-multi-select',
      wrappers: ['form-field'],
      component: CvcPhenotypeSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Phenotypes' },
      },
    },
    {
      name: 'variant-type-select',
      wrappers: ['form-field'],
      component: CvcVariantTypeSelectField,
      defaultOptions: { props: { label: 'Variant Type' } },
    },
    {
      name: 'variant-type-multi-select',
      wrappers: ['form-field'],
      component: CvcVariantTypeSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Variant Types' },
      },
    },
  ],
}

@NgModule({
  imports: [FormlyModule.forChild(selectFieldTypes)],
})
export class CvcSelectFieldsRegistryModule {}
