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

export const SELECT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  VariantIdSelect: VARIANT_ID_SELECT,
}
