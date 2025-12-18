import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import {
  AmpLevel,
  EnumSearchOperator,
  IntSearchOperator,
  OntologyTermSearchOperator,
  StringSearchOperator,
} from '@app/generated/civic.apollo'

const BOOLEAN_INPUT = [
  {
    key: 'value',
    type: 'base-checkbox',
  },
]
const STRING_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: StringSearchOperator.Contains,
    props: {
      placeholder: 'Select Operator',
      options: getSelectOptions('StringSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    defaultValue: '',
    props: {
      placeholder: 'Enter search term',
    },
  },
]
const ONTOLOGY_TERM_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: OntologyTermSearchOperator.Eq,
    props: {
      options: getSelectOptions('OntologyTermSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      placeholder: 'Enter search term',
    },
  },
]
const INT_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: IntSearchOperator.Eq,
    props: {
      options: getSelectOptions('IntSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-integer',
    props: {
      placeholder: 'Enter integer',
    },
  },
]

const EVIDENCE_STATUS_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      options: getSelectOptions('EvidenceItemStatusEnum'),
      placeholder: 'Select Status',
    },
  },
]
const EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('EvidenceItemDirectionEnum'),
      placeholder: 'Select Direction',
    },
  },
]

const AMP_LEVEL_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('AmpLevel'),
      placeholder: 'Select Level',
    },
  },
]
const EVIDENCE_SIGNIFICANCE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('EvidenceSignificance'),
      placeholder: 'Select Significance',
    },
  },
]

const EVIDENCE_LEVEL_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('EvidenceLevel'),
      placeholder: 'Select Level',
    },
  },
]

const EVIDENCE_TYPE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('EvidenceType'),
      placeholder: 'Select Type',
    },
  },
]

const THERAPY_INTERACTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      options: getSelectOptions('TherapyInteraction'),
      placeholder: 'Select Interaction Type',
    },
  },
]
export const INPUT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  AmpLevelTypeSearchInput: AMP_LEVEL_TYPE_SEARCH_INPUT,
  StringSearchInput: STRING_SEARCH_INPUT,
  OntologyTermSearchInput: ONTOLOGY_TERM_INPUT,
  IntSearchInput: INT_INPUT,
  BooleanSearchInput: BOOLEAN_INPUT,
  EvidenceStatusTypeSearchInput: EVIDENCE_STATUS_TYPE_SEARCH_INPUT,
  EvidenceDirectionTypeSearchInput: EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT,
  EvidenceLevelTypeSearchInput: EVIDENCE_LEVEL_TYPE_SEARCH_INPUT,
  EvidenceTypeTypeSearchInput: EVIDENCE_TYPE_TYPE_SEARCH_INPUT,
  EvidenceSignificanceTypeSearchInput: EVIDENCE_SIGNIFICANCE_TYPE_SEARCH_INPUT,
  TherapyInteractionTypeSearchInput: THERAPY_INTERACTION_TYPE_SEARCH_INPUT,
}
