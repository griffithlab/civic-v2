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
    props: {
      required: true,
      placeholder: 'Select an Assertion',
      requireFeature: false,
      hideLabel: true,
    },
  },
]

const VARIANT_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'variant-select',
    props: {
      required: true,
      placeholder: 'Select a Variant',
      requireFeature: false,
      hideLabel: true,
    },
  },
]

const DISEASE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'disease-select',
    props: {
      required: true,
      placeholder: 'Select a Disease',
      requireFeature: false,
      hideLabel: true,
    },
  },
]

const THERAPY_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'therapy-select',
    props: {
      required: true,
      placeholder: 'Select a Therapy',
      hideLabel: true,
    },
  },
]

const SOURCE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'source-select',
    props: {
      required: true,
      placeholder: 'Select a Source',
      showAddEntity: false,
      hideLabel: true,
    },
  },
]

const EVIDENCE_ITEM_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'evidence-select',
    props: {
      required: true,
      placeholder: 'Select an Evidence Item',
      showManager: false,
      isMultiSelect: false,
      hideLabel: true,
    },
  },
]

const MOLECULAR_PROFILE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'molecular-profile-select',
    props: {
      required: true,
      placeholder: 'Select a Molecular Profile',
      hideLabel: true,
    },
  },
]

const VARIANT_TYPE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'variant-type-select',
    props: {
      required: true,
      placeholder: 'Select a Variant Type',
      hideLabel: true,
    },
  },
]

const USER_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'user-select',
    props: {
      required: true,
      placeholder: 'Select a User',
      hideLabel: true,
    },
  },
]

const FEATURE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'feature-select',
    props: {
      required: true,
      placeholder: 'Select a Feature',
      hideLabel: true,
    },
  },
]

const PHENOTYPE_ID_SELECT = [
  ENTITY_SELECT_OPERATOR,
  {
    key: 'value',
    type: 'phenotype-select',
    props: {
      required: true,
      placeholder: 'Select a Phenotype',
      hideLabel: true,
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
