import { FormlyFieldConfig } from '@ngx-formly/core'

// custom operator select for entity selection, with only 'is' and 'is not' (EQ/NEQ) options
const ENTITY_SELECT_OPERATOR = {
  key: 'operator',
  type: 'base-select',
  defaultValue: 'EQ',
  props: {
    options: [
      {
        label: 'is',
        value: 'EQ',
      },
      {
        label: 'is not',
        value: 'NEQ',
      },
    ],
    placeholder: 'Select an operator',
  },
}
const ASSERTION_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'assertion-select',
    wrappers: [],
    props: {
      placeholder: 'Select an Assertion',
      requireFeature: false,
    },
  },
]

const VARIANT_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'variant-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Variant',
      requireFeature: false,
    },
  },
]

const DISEASE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'disease-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Disease',
      requireFeature: false,
    },
  },
]

const THERAPY_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'therapy-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Therapy',
    },
  },
]

const SOURCE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'source-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Source',
    },
  },
]

const EVIDENCE_ITEM_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'evidence-select',
    wrappers: [],
    props: {
      placeholder: 'Select an Evidence Item',
    },
  },
]

const MOLECULAR_PROFILE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'molecular-profile-select',
    props: {
      placeholder: 'Select a Molecular Profile',
    },
  },
]

const VARIANT_TYPE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'variant-type-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Variant Type',
    },
  },
]

const USER_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'user-select',
    wrappers: [],
    props: {
      placeholder: 'Select a User',
    },
  },
]

const FEATURE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'feature-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Feature',
    },
  },
]

const PHENOTYPE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'phenotype-select',
    wrappers: [],
    props: {
      placeholder: 'Select a Phenotype',
    },
  },
]

export const SELECT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  AssertionIdSelect: ASSERTION_ID_SELECT,
  DiseaseIdSelect: DISEASE_ID_SELECT,
  EvidenceItemIdSelect: EVIDENCE_ITEM_ID_SELECT,
  FeatureIdSelect: FEATURE_ID_SELECT,
  MolecularProfileIdSelect: MOLECULAR_PROFILE_ID_SELECT,
  PhenotypeIdSelect: PHENOTYPE_ID_SELECT,
  SourceIdSelect: SOURCE_ID_SELECT,
  TherapyIdSelect: THERAPY_ID_SELECT,
  UserIdSelect: USER_ID_SELECT,
  VariantIdSelect: VARIANT_ID_SELECT,
  VariantTypeIdSelect: VARIANT_TYPE_ID_SELECT,
}
