import { ConfigOption } from '@ngx-formly/core'
import { CvcQuerySubfiltersField } from './query-subfilters/query-subfilters.type'

export const queryBuilderTypesConfig: ConfigOption = {
  types: [
    {
      name: 'query-subfilters',
      wrappers: ['form-field'],
      component: CvcQuerySubfiltersField,
      defaultOptions: {
        props: {
          label: 'Query Subfilters',
        },
      },
    },
  ],
}
