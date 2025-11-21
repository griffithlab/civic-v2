import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { StringSearchOperator } from '@app/generated/civic.apollo'

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
    defaultValue: undefined,
    props: {
      placeholder: 'Select Operator',
      options: getSelectOptions('StringSearchOperator'),
      variant: 'underlined',
    },
  },
  {
    key: 'value',
    type: 'base-input',
    defaultValue: '',
    props: {
      placeholder: 'Enter search term',
      variant: 'underlined',
    },
  },
]
const ONTOLOGY_TERM_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('OntologyTermSearchOperator'),
      variant: 'underlined',
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      placeholder: 'Enter search term',
      variant: 'underlined',
    },
  },
]
const INT_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('IntSearchOperator'),
      variant: 'underlined',
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      placeholder: 'Enter number',
      variant: 'underlined',
    },
  },
]

const EVIDENCE_STATUS_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('EnumSearchOperator'),
      variant: 'underlined',
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      options: getSelectOptions('EvidenceItemStatusEnum'),
      placeholder: 'Select Status',
      variant: 'underlined',
    },
  },
]
const EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('EnumSearchOperator'),
      defaultValue: undefined,
      variant: 'underlined',
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      options: getSelectOptions('EvidenceItemDirectionEnum'),
      defaultValue: undefined,
      placeholder: 'Select Direction',
      variant: 'underlined',
    },
  },
]

export const INPUT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  StringSearchInput: STRING_SEARCH_INPUT,
  OntologyTermSearchInput: ONTOLOGY_TERM_INPUT,
  IntSearchInput: INT_INPUT,
  BooleanSearchInput: BOOLEAN_INPUT,
  EvidenceStatusTypeSearchInput: EVIDENCE_STATUS_TYPE_SEARCH_INPUT,
  EvidenceDirectionTypeSearchInput: EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT,
}
