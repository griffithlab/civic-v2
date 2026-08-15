import { NgModule } from '@angular/core'
import { CvcAcmgCodeSelectField } from '@app/forms/types/acmg-code-select/acmg-code-select.type'
import { CvcAmpCategorySelectField } from '@app/forms/types/amp-category-select/amp-category-select.type'
import { CvcDirectionSelectField } from '@app/forms/types/direction-select/direction-select.type'
import { CvcInteractionSelectField } from '@app/forms/types/interaction-select/interaction-select.type'
import { CvcLevelSelectField } from '@app/forms/types/level-select/level-select.type'
import { CvcOriginSelectField } from '@app/forms/types/origin-select/origin-select.type'
import { CvcRatingField } from '@app/forms/types/rating/rating.type'
import { CvcRegionVariantNameSelectField } from '@app/forms/types/region-variant-name-select/region-variant-name-select.type'
import { CvcSignificanceSelectField } from '@app/forms/types/significance-select/significance-select.type'
import { CvcEntityTypeSelectField } from '@app/forms/types/type-select/type-select.type'
import { CvcClingenCodeSelectField } from '@app/forms/types/clingen-code-select/clingen-code-select.type'
import { CvcCytogeneticRegionSelectField } from '@app/forms/types/cytogenetic-region-select/cytogenetic-region-select.type'
import { CvcDiseaseSelectField } from '@app/forms/types/disease-select/disease-select.type'
import { CvcEvidenceSelectField } from '@app/forms/types/evidence-select/evidence-select.type'
import { CvcFeatureSelectField } from '@app/forms/types/feature-select/feature-select.type'
import { CvcPhenotypeSelectField } from '@app/forms/types/phenotype-select/phenotype-select.type'
import { CvcReferenceBuildSelectField } from '@app/forms/types/reference-build-select/reference-build-select.type'
import { CvcMolecularProfileSelectField } from '@app/forms/types/molecular-profile-select/molecular-profile-select.type'
import { CvcNccnGuidelineSelectField } from '@app/forms/types/nccn-guideline-select/nccn-guideline-select.type'
import { CvcSourceSelectField } from '@app/forms/types/source-select/source-select.type'
import { CvcTherapySelectField } from '@app/forms/types/therapy-select/therapy-select.type'
import { CvcVariantSelectField } from '@app/forms/types/variant-select/variant-select.type'
import { CvcVariantTypeSelectField } from '@app/forms/types/variant-type-select/variant-type-select.type'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'

/**
 * The single FormlyModule.forChild registration for migrated select fields.
 * Imported by types/form-types.module.ts; each field's old per-type NgModule is
 * removed from that module in the same commit, so no type name is ever bound to
 * two components. Never re-provide FormlyConfig via forRoot in a lazy injector —
 * it silently breaks FieldArrayType.onPopulate (see forms.module.ts).
 */
/**
 * The enum selects, which pick from a fixed schema enum or a form-state list
 * rather than searching the API. None of them is used in multi-select mode
 * anywhere in the app, so only the singular type name is registered; the old
 * per-field modules each registered an unused `*-multi-select` alongside it,
 * one of which had been carrying level-select's label since it was copied.
 */
const enumFieldTypes = [
  {
    name: 'amp-category-select',
    wrappers: ['form-field'],
    component: CvcAmpCategorySelectField,
  },
  {
    name: 'direction-select',
    wrappers: ['form-field'],
    component: CvcDirectionSelectField,
  },
  {
    name: 'interaction-select',
    wrappers: ['form-field'],
    component: CvcInteractionSelectField,
  },
  {
    name: 'level-select',
    wrappers: ['form-field'],
    component: CvcLevelSelectField,
  },
  {
    name: 'origin-select',
    wrappers: ['form-field'],
    component: CvcOriginSelectField,
  },
  {
    name: 'rating',
    wrappers: ['form-field'],
    component: CvcRatingField,
  },
  {
    name: 'region-variant-name-select',
    wrappers: ['form-field'],
    component: CvcRegionVariantNameSelectField,
  },
  {
    name: 'significance-select',
    wrappers: ['form-field'],
    component: CvcSignificanceSelectField,
  },
  {
    name: 'type-select',
    wrappers: ['form-field'],
    component: CvcEntityTypeSelectField,
  },
]

const selectFieldTypes: ConfigOption = {
  types: [
    ...enumFieldTypes,
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
      name: 'feature-select',
      wrappers: ['form-field'],
      component: CvcFeatureSelectField,
      defaultOptions: { props: { label: 'Feature' } },
    },
    {
      name: 'feature-multi-select',
      wrappers: ['form-field'],
      component: CvcFeatureSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Features' },
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
      name: 'molecular-profile-select',
      wrappers: ['form-field'],
      component: CvcMolecularProfileSelectField,
      defaultOptions: { props: { label: 'Molecular Profile' } },
    },
    {
      name: 'molecular-profile-multi-select',
      wrappers: ['form-field'],
      component: CvcMolecularProfileSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Molecular Profiles' },
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
      name: 'reference-build-select',
      wrappers: ['form-field'],
      component: CvcReferenceBuildSelectField,
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
      name: 'variant-select',
      wrappers: ['form-field'],
      component: CvcVariantSelectField,
      defaultOptions: { props: { label: 'Variant' } },
    },
    {
      name: 'variant-multi-select',
      wrappers: ['form-field'],
      component: CvcVariantSelectField,
      defaultOptions: {
        props: { isMultiSelect: true, label: 'Variants' },
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
