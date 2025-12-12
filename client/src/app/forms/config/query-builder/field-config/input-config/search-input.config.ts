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
      variant: 'default',
    },
  },
  {
    key: 'value',
    type: 'base-input',
    defaultValue: '',
    props: {
      placeholder: 'Enter search term',
      variant: 'default',
    },
  },
]
const ONTOLOGY_TERM_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('OntologyTermSearchOperator'),
      variant: 'default',
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      placeholder: 'Enter search term',
      variant: 'default',
    },
  },
]
const INT_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('IntSearchOperator'),
      variant: 'default',
    },
  },
  {
    key: 'value',
    type: 'base-integer',
    props: {
      placeholder: 'Enter integer',
      variant: 'default',
    },
  },
]

const EVIDENCE_STATUS_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      options: getSelectOptions('EnumSearchOperator'),
      variant: 'default',
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      options: getSelectOptions('EvidenceItemStatusEnum'),
      placeholder: 'Select Status',
      variant: 'default',
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
      variant: 'default',
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      options: getSelectOptions('EvidenceItemDirectionEnum'),
      defaultValue: undefined,
      placeholder: 'Select Direction',
      variant: 'default',
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
