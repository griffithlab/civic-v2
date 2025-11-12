import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'

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
    props: {
      label: 'Select search operator',
      options: getSelectOptions('StringSearchOperator'),
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
const ONTOLOGY_TERM_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    props: {
      label: 'Select Search Operator',
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
    props: {
      label: 'Select operator',
      options: getSelectOptions('IntSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      placeholder: 'Enter number',
    },
  },
]

export const INPUT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  StringSearchInput: STRING_SEARCH_INPUT,
  OntologyTermSearchInput: ONTOLOGY_TERM_INPUT,
  IntSearchInput: INT_INPUT,
  BooleanSearchInput: BOOLEAN_INPUT,
}
