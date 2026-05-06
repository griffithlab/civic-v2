import { FormlyFieldConfig } from '@ngx-formly/core'
import { CvcTherapySelectFieldOptions } from '../../types/therapy-select/therapy-select.type'
import { CvcFeatureSelectFieldConfig } from '../../types/feature-select/feature-select.type'
import { CvcLevelSelectFieldOptions } from '../../types/level-select/level-select.type'
import { CvcOriginSelectFieldOptions } from '../../types/origin-select/origin-select.type'
import { CvcSourceSelectFieldConfig } from '../../types/source-select/source-select.type'
import { CvcTagInputOptions } from '../../types/tag-input/tag-input.type'
import { CvcVariantSelectFieldConfig } from '../../types/variant-select/variant-select.type'
import { CvcMolecularProfileSelectFieldConfig } from '../../types/molecular-profile-select/molecular-profile-select.type'
import { CvcDiseaseSelectFieldConfig } from '../../types/disease-select/disease-select.type'
import { CvcEntityTypeSelectFieldConfig } from '../../types/type-select/type-select.type'

export const noStateFormsModel = {
  geneId: undefined,
}

export const noStateFormsFieldConfig: FormlyFieldConfig[] = [
  <CvcMolecularProfileSelectFieldConfig>{
    key: 'molecularProfileId',
    type: 'molecular-profile-select',
    props: {},
  },
  <CvcMolecularProfileSelectFieldConfig>{
    key: 'molecularProfileIds',
    type: 'molecular-profile-multi-select',
    props: {},
  },
  <CvcEntityTypeSelectFieldConfig>{
    key: 'evidenceType',
    type: 'type-select',
    props: {},
  },
  <CvcEntityTypeSelectFieldConfig>{
    key: 'evidenceTypes',
    type: 'type-multi-select',
    props: {},
  },

  <CvcFeatureSelectFieldConfig>{
    key: 'featureId',
    type: 'feature-select',
  },
  <CvcFeatureSelectFieldConfig>{
    key: 'featureIds',
    type: 'feature-multi-select',
    props: {},
  },
  <CvcVariantSelectFieldConfig>{
    key: 'variantId',
    type: 'variant-select',
    props: {
      requireFeature: false,
    },
  },
  <CvcVariantSelectFieldConfig>{
    key: 'variantIds',
    type: 'variant-multi-select',
    props: {
      requireFeature: false,
    },
  },
  <CvcSourceSelectFieldConfig>{
    key: 'sourceId',
    type: 'source-select',
    props: {},
  },
  <CvcSourceSelectFieldConfig>{
    key: 'sourceIds',
    type: 'source-multi-select',
    props: {},
  },
  <CvcDiseaseSelectFieldConfig>{
    key: 'diseaseId',
    type: 'disease-select',
    props: {},
  },
  <CvcDiseaseSelectFieldConfig>{
    key: 'diseaseIds',
    type: 'disease-multi-select',
    props: {},
  },
  <CvcTherapySelectFieldOptions>{
    key: 'drugId',
    type: 'therapy-select',
    props: {},
  },
  <CvcTherapySelectFieldOptions>{
    key: 'drugIds',
    type: 'therapy-multi-select',
    props: {},
  },
  <CvcLevelSelectFieldOptions>{
    key: 'evidenceLevel',
    type: 'level-select',
    props: {},
  },
  <CvcLevelSelectFieldOptions>{
    key: 'evidenceLevel',
    type: 'level-multi-select',
    props: {},
  },
  <CvcOriginSelectFieldOptions>{
    key: 'variantOrigin',
    type: 'origin-select',
    props: {},
  },
  <CvcOriginSelectFieldOptions>{
    key: 'variantOrigins',
    type: 'origin-multi-select',
    props: {},
  },
  <CvcTagInputOptions>{
    key: 'tag',
    type: 'tag-input',
    props: {
      label: 'Input Test',
    },
  },
  <CvcTagInputOptions>{
    key: 'tags',
    type: 'tag-multi-input',
    props: {
      label: 'Input Multi Test',
    },
  },
]
