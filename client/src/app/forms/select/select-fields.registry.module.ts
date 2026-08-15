import { NgModule } from '@angular/core'
import { CvcAcmgCodeSelectField } from '@app/forms/types/acmg-code-select/acmg-code-select.type'
import { CvcClingenCodeSelectField } from '@app/forms/types/clingen-code-select/clingen-code-select.type'
import { CvcCytogeneticRegionSelectField } from '@app/forms/types/cytogenetic-region-select/cytogenetic-region-select.type'
import { CvcDiseaseSelectField } from '@app/forms/types/disease-select/disease-select.type'
import { CvcEvidenceSelectField } from '@app/forms/types/evidence-select/evidence-select.type'
import { CvcPhenotypeSelectField } from '@app/forms/types/phenotype-select/phenotype-select.type'
import { CvcNccnGuidelineSelectField } from '@app/forms/types/nccn-guideline-select/nccn-guideline-select.type'
import { CvcSourceSelectField } from '@app/forms/types/source-select/source-select.type'
import { CvcTherapySelectField } from '@app/forms/types/therapy-select/therapy-select.type'
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
      name: 'acmg-code-select',
      wrappers: ['form-field'],
      component: CvcAcmgCodeSelectField,
      defaultOptions: { props: { label: 'ACMG/AMP Code' } },
    },
    {
      name: 'acmg-code-multi-select',
      wrappers: ['form-field'],
      component: CvcAcmgCodeSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'ACMG/AMP Code(s)' },
      },
    },
    {
      name: 'clingen-code-select',
      wrappers: ['form-field'],
      component: CvcClingenCodeSelectField,
      defaultOptions: { props: { label: 'ClinGen/CGC/VICC Code' } },
    },
    {
      name: 'clingen-code-multi-select',
      wrappers: ['form-field'],
      component: CvcClingenCodeSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'ClinGen/CGC/VICC Code(s)' },
      },
    },
    {
      name: 'cytogenetic-region-select',
      wrappers: ['form-field'],
      component: CvcCytogeneticRegionSelectField,
      defaultOptions: { props: { label: 'Region' } },
    },
    {
      name: 'cytogenetic-region-multi-select',
      wrappers: ['form-field'],
      component: CvcCytogeneticRegionSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Regions' },
      },
    },
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
      name: 'evidence-select',
      wrappers: ['form-field'],
      component: CvcEvidenceSelectField,
      defaultOptions: { props: { label: 'Evidence Item' } },
    },
    {
      name: 'evidence-multi-select',
      wrappers: ['form-field'],
      component: CvcEvidenceSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Evidence Items' },
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
      name: 'nccn-guideline-select',
      wrappers: ['form-field'],
      component: CvcNccnGuidelineSelectField,
      defaultOptions: { props: { label: 'NCCN Guideline' } },
    },
    {
      name: 'nccn-guideline-multi-select',
      wrappers: ['form-field'],
      component: CvcNccnGuidelineSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'NCCN Guideline(s)' },
      },
    },
    {
      name: 'source-select',
      wrappers: ['form-field'],
      component: CvcSourceSelectField,
      defaultOptions: { props: { label: 'Source' } },
    },
    {
      // no label, for use in repeat-field types
      name: 'source-multi-select',
      wrappers: ['form-field'],
      component: CvcSourceSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Sources' },
      },
    },
    {
      name: 'therapy-select',
      wrappers: ['form-field'],
      component: CvcTherapySelectField,
      defaultOptions: { props: { label: 'Therapy' } },
    },
    {
      name: 'therapy-multi-select',
      wrappers: ['form-field'],
      component: CvcTherapySelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Therapies' },
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
