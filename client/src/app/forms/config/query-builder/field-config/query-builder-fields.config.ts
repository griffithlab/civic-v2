import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'

export const queryBuilderFieldsConfig: FormlyFieldConfig[] = [
  {
    key: 'query',
    wrappers: ['query-subfilters-card'],
    props: {
      formCardOptions: { title: 'Query Subfilters Card' },
    },
    fieldGroup: [
      {
        key: 'booleanOperator',
        type: 'base-select',
        wrappers: [],
        props: {
          required: true,
          size: 'small',
          options: [
            { label: 'all', value: BooleanOperator.And },
            { label: 'any', value: BooleanOperator.Or },
          ],
        },
      },
      {
        key: 'subFilters',
        type: 'query-subfilters',
        wrappers: [],
        fieldArray: {
          fieldGroup: [
            /* ... */
          ],
        },
      },
    ],
  },
]
